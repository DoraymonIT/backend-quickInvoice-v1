import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient, Product, Prisma } from '@prisma/client';
import { CreateProductDto } from './create-product.dto';
import { UpdateProductDto } from './update-product.dto';

const prisma = new PrismaClient();

@Injectable()
export class ProductService {
  public getProducts(userId: string): Promise<Product[]> {
    return prisma.product.findMany({
      where: {
        userId: userId,
      },
      include: {
        user: true,
      },
    });
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
  findByRef(ref: string,userId:string) : Promise<Product[]> {
    return prisma.product.findMany({
      where: {
        ref: ref,
        userId:userId
        // ref: ref,
      },
      
      // include: {
      //   user: true,
      // },
    });
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
  async deleteProduct(id: any) {
    try {
      const dataProduct = await prisma.product.delete({
        where: {
          id,
        },
      });
      return {
        statusCode: 200,
        data: 'Deleted ' + dataProduct,
      };
    } catch (e) {
      console.log(e);

      throw new HttpException(e.meta.cause, HttpStatus.NOT_FOUND);
    }
  }
  async update(id: any, updateProdcutDto: UpdateProductDto) {
    console.log(id);

    const updateTask = await prisma.product.update({
      data: updateProdcutDto,
      where: {
        id,
      },
    });
    return {
      statusCode: 200,
      data: updateTask,
    };
  }
}
