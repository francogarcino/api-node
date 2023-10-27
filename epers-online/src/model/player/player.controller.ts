import { Controller, Get, Post } from '@nestjs/common';
import { PlayerService } from './player.service';
import { Player } from './player.schema';

@Controller('players')
export class PlayerController {
  constructor(private readonly service: PlayerService) {}

  @Get('/all')
  getPlayers(): Promise<Player[]> {
    return this.service.readAll()
  }

  @Post('/register')
  register(player: Player): Promise<Player> {
    return this.service.create(player)
  }
}
