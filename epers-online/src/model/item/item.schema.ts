import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ItemDoc = HydratedDocument<Item>;

@Schema({collection: 'items', versionKey: false})
export class Item {
    constructor(nombre: string, clase: RelatedClass, daño: number) {
        this.name = nombre
        this.class = clase
        if (daño < 1 && (clase != RelatedClass.HEALER || clase != RelatedClass.WIZARD)) {
            throw new Error("Damage can not be zero or negative for an melee or marksman item")
        }
        this.damage = daño
    }

    _id: String
    @Prop() name: string
    @Prop() class: RelatedClass
    @Prop() damage = daño
    // proba si funciona sin prop por CoC
    owner?: string;

}

export const ItemSchema = SchemaFactory.createForClass(Item);

enum RelatedClass {
    MELEE, WIZARD, HEALER, MARKSMAN
}