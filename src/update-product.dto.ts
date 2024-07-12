// create-product.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateProductDto {
  //   @IsString()
  //   readonly id: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly ref: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly designation: string;
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  readonly price: number;
}
