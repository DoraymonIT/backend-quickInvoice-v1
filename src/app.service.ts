import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {

  constructor(private prisma: PrismaService) { }

  async getAll(): Promise<Product[]> {
    return await this.prisma.product.findMany();
  }


}