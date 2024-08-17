// create-product.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional, IsBoolean } from 'class-validator';

export class UpdateUserDto {
  //   @IsString()
  //   readonly id: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly   name: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly   email: string;
  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  readonly isActive: boolean;

}
