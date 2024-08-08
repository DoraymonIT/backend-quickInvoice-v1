import { Injectable } from '@nestjs/common';
import { PrismaClient, Prisma, UserSettings } from '@prisma/client';
import { CreateuserCompanyDto } from './create-userCompany.dto';
import { UpdateuserCompanyDto } from './update-userCompany.dto';
// import { UpdateuserCompanyDto } from './update-userCompany.dto';

const prisma = new PrismaClient();

@Injectable()
export class userCompanyService {
  public getuserCompanys(userId: string): Promise<UserSettings> {
    return prisma.userSettings.findFirst({
      where: {
        // userId: userId,
        userId: userId,
      },
      include: {
        user: true,
      },
    });
  }

  async createuserCompany(createuserCompanyDto: CreateuserCompanyDto) {
    // return prisma.userCompany.create({ data: createuserCompanyDto });
    const createData = await prisma.userSettings.create({
      data: { ...createuserCompanyDto },
    });

    return {
      statusCode: 200,
      data: createData,
    };
  }

  async update(id: string, updateProdcutDto: UpdateuserCompanyDto) {
    console.log('updateProdcutDto : ', updateProdcutDto);

    const updateTask = await prisma.userSettings.update({
      data: { ...updateProdcutDto },

      where: {
        id: id,
      },
    });
    return {
      statusCode: 200,
      data: updateTask,
    };
  }
}
