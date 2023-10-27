import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Player } from './player.schema';

@Injectable()
export class PlayerService {
    constructor(@InjectModel('palyers') private model: Model<Player>) {}

    async create(playerDTO: Player) : Promise<Player> {
        const p = new this.model(playerDTO);
        return p.save();
    }

    async readAll() : Promise<Player[]> {
        return this.model.find().exec();
    }
}
