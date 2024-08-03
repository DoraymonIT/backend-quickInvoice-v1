//src/auth/auth.service.ts
import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { AuthEntity } from '../auth.entity';
import * as bcrypt from 'bcrypt';
import { SignUpDto } from '../signup.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async login(email: string, password: string): Promise<AuthEntity> {
    console.log(email, password);

    // Step 1: Fetch a user with the given email
    const user = await this.prisma.user.findUnique({ where: { email: email } });

    // If no user is found, throw an error
    if (!user) {
      throw new NotFoundException(`No user found for email: ${email}`);
    }

    // Step 2: Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);

    // If password does not match, throw an error
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    // Step 3: Generate a JWT token containing the user's ID and return it
    return {
      accessToken: this.jwtService.sign({ userId: user.userId }),
    };
  }

  async signUp(
    name: string,
    email: string,
    password: string,
  ): Promise<{ token: string }> {
    // const { name, email, password } = signUpDto;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = {
      name: name,
      email: email,
      password: hashedPassword,
    };

    await this.createUser(user);

    const token = this.jwtService.sign({ id: user });

    return { token };
  }

  async createUser(signUpDto: SignUpDto) {
    try {
      // return prisma.product.create({ data: createProductDto });
      console.log(signUpDto);
     
      const createData = await prisma.user.create({
        data: signUpDto,
      });
  
      return {
        statusCode: 200,
        data: createData,
      };
   } catch (error) {
     throw new HttpException({
       status: HttpStatus.EXPECTATION_FAILED,
       error: 'Email alraedy exists, try other one',
     }, HttpStatus.EXPECTATION_FAILED, {
       cause: error
     });
   }
  }

}
