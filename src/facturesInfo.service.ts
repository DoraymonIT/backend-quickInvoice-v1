import { Injectable } from '@nestjs/common';
import { PrismaClient,  FactureInfo , Prisma } from '@prisma/client';
import { CreateFactureInfoDto } from './create-factureInfo.dto';

const prisma = new PrismaClient();

@Injectable()
export class  FactureInfoService {
  public getFactureAllInfos(userId:string): Promise< FactureInfo[]> {
    return prisma.factureInfo.findMany({
      where: {
        userId: userId,
      },
      include: {
        user: true,
      },
    });
  }

  async createFactureInfo(createFactureInfoDto: CreateFactureInfoDto) {
    // return prisma. FactureInfo.create({ data: create FactureInfoDto });
    console.log(createFactureInfoDto);
    
    const createData = await prisma.factureInfo.create({
      data: createFactureInfoDto,
    });

    return {
      statusCode: 200,
      data: createData,
    };
  }





}
