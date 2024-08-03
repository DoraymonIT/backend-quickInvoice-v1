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
import { AuthModule, jwtSecret } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { JwtStrategy } from './auth/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
@Module({
  imports: [UsersModule,   PassportModule,
    JwtModule.register({
      secret: jwtSecret,
      signOptions: { expiresIn: '5m' }, // e.g. 30s, 7d, 24h
    }),
    UsersModule,],
  exports: [cloudinaryProvider],
  controllers: [
    AppController,
    ProductController,
    ComapnyController,
    userCompanyController,
    FactureInfoController,
    AuthController,
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
    AuthService,JwtStrategy
  ],
})
export class AppModule {}
