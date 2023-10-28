import { Body, Controller, Get, Post } from '@nestjs/common';
import { ItemService } from './item.service';
import { Item } from './item.schema';

@Controller('items')
export class ItemController {
  constructor(private readonly service: ItemService) {}

  @Get('/all')
  getPlayers(): Promise<Item[]> {
    return this.service.readAll()
  }

  @Post('/forge')
  register(@Body() item: Item): Promise<Item> {
    return this.service.create(item)
  }
}
