import { HttpModule } from 'nestjs-http-promise'
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlatformServiceService } from './platform-service/platform-service.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [AppService, PlatformServiceService],
})
export class AppModule {}
