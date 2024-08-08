import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class UsersService {
  async findOne(email: any) {
    return prisma.user.findFirst({
      where: {
        email,
      },
    });
  }
}
