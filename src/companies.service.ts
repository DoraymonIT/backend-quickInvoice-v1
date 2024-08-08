import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient, Prisma, Company } from '@prisma/client';
import { CreateCompanyDto } from './create-company.dto';

const prisma = new PrismaClient();

@Injectable()
export class CompanyService {
  public getCompanies(userId:string): Promise<Company[]> {
    return prisma.company.findMany({
      where: {
        userId: userId,
      },
      include: {
        user: true,
      },
    });
  }

  async createProduct(createCompanyDto: CreateCompanyDto) {
    // return prisma.product.create({ data: createProductDto });
    const createData = await prisma.company.create({
      data: createCompanyDto,
    });

    return {
      statusCode: 200,
      data: createData,
    };
  }
  async findByIce(ice: string) {
    // console.log(ice);
    // const dataCompany = await prisma.product.findFirst({
    //   where: {
    //     ref,
    //   },
    // });
    return prisma.company.findFirst({
      where: {
        ice,
      },
    });
    // statusCode: 200,
    // data: dataCompany,
  }
  async findByNom(nom: string) {
    // console.log(nom);
    const dataCompany = await prisma.company.findFirst({
      where: {
        nom,
      },
    });
    return {
      dataCompany,
      // statusCode: 200,
      // data: dataCompany,
    };
  }
  async findOne(id: any) {
    // console.log(id);
    const dataCompany = await prisma.company.findFirst({
      where: {
        id,
      },
    });
    return {
      statusCode: 200,
      data: dataCompany,
    };
  }

  //   async update(id: any, updateProdcutDto: UpdateProductDto) {
  //     const updateTask = await prisma.product.update({
  //       data: updateProdcutDto,
  //       where: {
  //         id,
  //       },
  //     });
  //     return {
  //       statusCode: 200,
  //       data: updateTask,
  //     };
  //   }
  async deleteCompany(id: any) {
    try {
      const dataCompany = await prisma.company.delete({
        where: {
          id,
        },
      });
      return {
        statusCode: 200,
        data: 'Deleted ' + dataCompany,
      };
    } catch (e) {
      console.log(e);

      throw new HttpException(e.meta.cause, HttpStatus.NOT_FOUND);
    }
  }
}
