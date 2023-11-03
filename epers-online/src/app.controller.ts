import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Logger } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  logger = new Logger("AppController")
  @Get()
  getHello(): string {
    this.logger.log("hello")
    return this.appService.getHello();
  }
}
