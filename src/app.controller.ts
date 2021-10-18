import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PlatformServiceService } from './platform-service/platform-service.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly platformService: PlatformServiceService) {}

  @Get('/platform')
  getPlatform(): string {
    return this.platformService.getPlatform();
  }

  @Get('/status')
  async getStatus(): Promise<any> {
    return await this.appService.getStatus();
  }
}
