import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PlayerModule } from './model/player/player.module';
import { ItemModule } from './model/item/item.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/nest'),
    PlayerModule, ItemModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
