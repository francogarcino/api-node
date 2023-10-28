import { Model } from 'mongoose';
import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Item } from './item.schema';


@Injectable()
export class ItemService {
    constructor(@InjectModel('items') private model: Model<Item>) {}
    logger = new Logger

    async create(dto: Item) : Promise<Item> {
        const p = new this.model(dto);
        return p.save();
    }

    async readAll() : Promise<Item[]> {
        return this.model.find().exec();
    }

}
