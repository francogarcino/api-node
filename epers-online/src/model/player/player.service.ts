import { Model } from 'mongoose';
import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Player } from './player.schema';

@Injectable()
export class PlayerService {
    constructor(@InjectModel('players') private model: Model<Player>) {}
    logger = new Logger

    async create(playerDTO: Player) : Promise<Player> {
        if (await this.isPlayerNameTaken(playerDTO.name)) {
            throw new NotFoundException("Casi bro")
        } else {
            const p = new this.model(playerDTO);
            this.logger.log("Welcome to epers " + playerDTO.name)
            return p.save();
        }
    }

    async readAll() : Promise<Player[]> {
        return this.model.find().exec();
    }

    // Metodo auxiliar
    async isPlayerNameTaken(name: string): Promise<boolean> {
        const existingPlayer = await this.model.findOne({ name }).exec();
        return !!existingPlayer
    }
}
