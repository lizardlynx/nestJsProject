import { Injectable } from '@nestjs/common';
import { HttpService } from 'nestjs-http-promise';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}
  
  getHello(): string {
    return 'Hello World!';
  }

  async getStatus(): Promise<any> {
    const urls = {
      'Nikita': 'http://ef63-81-24-208-71.ngrok.io',
      'Ellipse': 'http://cfff-80-243-159-234.ngrok.io/',
      'Liza': 'https://3234-212-90-61-86.ngrok.io/',
      'Ivan': 'http://195e-193-161-14-38.ngrok.io',
      'Lidiia': 'http://89e8-46-219-240-124.ngrok.io',
      'Oleg': 'http://c94f-188-163-101-228.ngrok.io',
    }
    const userList = await this.httpService.get<any>(urls['Nikita']);
    return userList;

 }
}
