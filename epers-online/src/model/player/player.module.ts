import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { PlayerSchema } from "./player.schema";
import { PlayerController } from "./player.controller";
import { PlayerService } from "./player.service";

@Module({
    imports: [MongooseModule.forFeature([{name: 'players', schema: PlayerSchema}])],
    controllers: [PlayerController],
    providers: [PlayerService]
})
export class PlayerModule {}