import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PlayerService } from './model/player/player.service';
import { Player, PlayerSchema } from './model/player/player.schema';
import { PlayerController } from './model/player/player.controller';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/nest'),
            MongooseModule.forFeature([{name: 'players', schema: PlayerSchema}])
  ],
  controllers: [AppController, PlayerController],
  providers: [AppService, PlayerService]
})
export class AppModule {}
