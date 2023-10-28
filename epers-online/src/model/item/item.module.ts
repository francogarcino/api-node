import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ItemController } from "./item.controller";
import { ItemService } from "./item.service";
import { ItemSchema } from "./item.schema";

@Module({
    imports: [MongooseModule.forFeature([{name: 'items', schema: ItemSchema}])],
    controllers: [ItemController],
    providers: [ItemService]
})
export class ItemModule {}