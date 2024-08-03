import { Controller, Get } from '@nestjs/common';
// import { ApiGatewayService } from './api-gateway.service';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Controller()
export class ApiGatewayController {
  constructor(private httpService: HttpService) {}
  @Get('menu')
  async getMenu() {
    const response = await firstValueFrom(
      this.httpService.get('http://localhost:3001/menu'),
    );
    return response.data;
  }
}
