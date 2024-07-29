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
import { FactureInfoController } from './facturesInfo.controller';
import { FactureInfoService } from './facturesInfo.service';
import { CloudinaryService } from './cloudinary.service';
import { cloudinaryProvider } from './cloudinary.provider';
@Module({
  imports: [],
  exports: [cloudinaryProvider],
  controllers: [
    AppController,
    ProductController,
    ComapnyController,
    userCompanyController,
    FactureInfoController,
  ],
  providers: [
    AppService,
    PrismaService,
    ProductService,
    CompanyService,
    userCompanyService,
    FactureInfoService,
    CloudinaryService,
    cloudinaryProvider,
  ],
})
export class AppModule {}
