import { Injectable } from '@nestjs/common';
import { PrismaClient, Prisma, UserSettingss } from '@prisma/client';
import { CreateuserCompanyDto } from './create-userCompany.dto';
import { UpdateuserCompanyDto } from './update-userCompany.dto';
// import { UpdateuserCompanyDto } from './update-userCompany.dto';

const prisma = new PrismaClient();

@Injectable()
export class userCompanyService {
  public getuserCompanys(): Promise<UserSettingss[]> {
    return prisma.userSettingss.findMany();
  }

  async createuserCompany(createuserCompanyDto: CreateuserCompanyDto) {
    // return prisma.userCompany.create({ data: createuserCompanyDto });
    const createData = await prisma.userSettingss.create({
      data: createuserCompanyDto,
    });

    return {
      statusCode: 200,
      data: createData,
    };
  }

 

  async update(id: string, updateProdcutDto: UpdateuserCompanyDto) {
    // console.log('the ID : ',id);
    
    const updateTask = await prisma.userSettingss.update({
      data: updateProdcutDto,
      where: {
       id:id
      }
    });
    return {
      statusCode: 200,
      data: updateTask,
    };
  }
}
