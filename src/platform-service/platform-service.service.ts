import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PlatformServiceService {  
  getPlatform() {
    return process.platform;
  }
}
