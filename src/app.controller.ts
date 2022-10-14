import { Controller, Get, Body, Post } from '@nestjs/common';
import { User } from '@prisma/client';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test')
  async getData() {
    return await this.appService.getData();
  }

  @Post('data')
  async signupUser(
    @Body() userData: { name?: string; email: string; birthYear?: number },
  ): Promise<User> {
    return this.appService.createUser(userData);
  }
}
