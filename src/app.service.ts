import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getData() {
    return this.prisma.user.findMany();
  }

  async createUser(userData: any): Promise<User> {
    const result = await this.prisma.user.create({
      data: userData,
    });
    return result;
  }
}
