import { Controller, Get, Post, Param } from '@nestjs/common';
import { PlayerService } from './player.service';
import { Player } from './player.schema';

@Controller('players')
export class PlayerController {
  constructor(private readonly service: PlayerService) {}

  @Get('/all')
  getPlayers(): Promise<Player[]> {
    return this.service.readAll()
  }

  @Post('/register/:nombre')
  register(@Param('nombre') name: string): Promise<Player> {
    return this.service.create(new Player(name))
  }
}
