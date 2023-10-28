import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ItemDoc = HydratedDocument<Item>;

@Schema({collection: 'items', versionKey: false})
export class Item {
    constructor(nombre: string) {
        this.name = nombre
    }

    _id: String
    @Prop() name: string;
}

export const ItemSchema = SchemaFactory.createForClass(Item);