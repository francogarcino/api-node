import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PlayerDoc = HydratedDocument<Player>;

@Schema({collection: 'players'})
export class Player {
    _id: String
    @Prop({ required: true }) name: String;
    @Prop({ default: 1000 }) gold: Number;
}

export const PlayerSchema = SchemaFactory.createForClass(Player);