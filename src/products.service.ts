import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient, Product, Prisma } from '@prisma/client';
import { CreateProductDto } from './create-product.dto';
import { UpdateProductDto } from './update-product.dto';

const prisma = new PrismaClient();

@Injectable()
export class ProductService {
  public getProducts(): Promise<Product[]> {
    return prisma.product.findMany();
  }

  async createProduct(createProductDto: CreateProductDto) {
    // return prisma.product.create({ data: createProductDto });
    try {
      const createData = await prisma.product.create({
        data: createProductDto,
      });
      return {
        statusCode: 200,
        data: createData,
      };
    } catch (e) {
      throw new HttpException(
        'There is a unique constraint violation, a new product cannot be created with this ref : ' +
          createProductDto.ref,
        HttpStatus.CONFLICT,
      );
    }
  }
  async findByRef(ref: string) {
    // console.log(ref);
    // const dataProduct = await prisma.product.findFirst({
    //   where: {
    //     ref,
    //   },
    // });
    return prisma.product.findFirst({
      where: {
        ref,
      },
    });
    // statusCode: 200,
    // data: dataProduct,
  }
  async findByDesignation(designation: string) {
    // console.log(designation);
    const dataProduct = await prisma.product.findFirst({
      where: {
        designation,
      },
    });
    return {
      dataProduct,
      // statusCode: 200,
      // data: dataProduct,
    };
  }
  async findOne(id: any) {
    // console.log(id);
    const dataProduct = await prisma.product.findFirst({
      where: {
        id,
      },
    });
    return {
      statusCode: 200,
      data: dataProduct,
    };
  }

  // async update(id: any, updateProdcutDto: UpdateProductDto) {
  //   console.log(id);

  //   const updateTask = await prisma.product.update({
  //     data: updateProdcutDto,
  //     where: {
  //       id,
  //     },
  //   });
  //   return {
  //     statusCode: 200,
  //     data: updateTask,
  //   };
  // }
}
