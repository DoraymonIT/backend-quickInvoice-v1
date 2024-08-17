import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { UpdateUserDto } from './update-user.dto';
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
  async findAll() {
    return prisma.user.findMany();
  }

  async update(userId: any, UpdateUserDto: UpdateUserDto) {
    console.log(UpdateUserDto);

    const updateTask = await prisma.user.update({
      data: UpdateUserDto,
      where: {
        userId,
      },
    });
    return {
      statusCode: 200,
      data: updateTask,
    };
  }
}
