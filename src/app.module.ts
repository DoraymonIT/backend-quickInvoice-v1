import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
 import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { ProductController } from './products.controller';
import { ProductService } from './products.service';
import { CompanyService } from './companies.service';
import { ComapnyController } from './companies.controller';
import { userCompanyController } from './userCompany.controller';
import { userCompanyService } from './userCompany.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
@Module({
  imports:[],
  controllers: [AppController,ProductController,ComapnyController,userCompanyController],
  providers: [AppService, PrismaService,ProductService,CompanyService,userCompanyService],
})
export class AppModule {}
