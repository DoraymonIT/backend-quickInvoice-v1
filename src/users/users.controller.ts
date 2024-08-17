//src/auth/auth.controller.ts

import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthEntity } from '../auth.entity';
import { LoginDto } from '../login.dto';
import { SignUpDto } from '../signup.dto';
import { UsersService } from './users.service';
import { UpdateUserDto } from './update-user.dto';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('all')
  getAllUsers() {
    return this.userService.findAll();
  }
  @Patch(':userId')
  async update(@Param('userId') userId: string, @Body() updateUserDto: UpdateUserDto) {
    return await this.userService.update(userId, updateUserDto);
  }
}
