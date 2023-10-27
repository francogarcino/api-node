import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PlayerDoc = HydratedDocument<Player>;

@Schema({collection: 'players', versionKey: false})
export class Player {
    constructor(nombre: string) {
        this.name = nombre
    }

    _id: String
    @Prop() name: string;
    @Prop({ default: 1000 }) gold: Number;
}

export const PlayerSchema = SchemaFactory.createForClass(Player);