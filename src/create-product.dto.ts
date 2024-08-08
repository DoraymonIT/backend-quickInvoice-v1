// create-product.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class CreateProductDto {
  //   @IsString()
  //   readonly id: string;
  @ApiProperty()
  @IsString()
  readonly ref: string;
  @ApiProperty()
  @IsString()
  readonly designation: string;
  @ApiProperty()
  // @IsNumber()
  readonly price: number;
  @ApiProperty()
  @IsString()
  readonly image: string;
  @ApiProperty()
  @IsString()
  readonly userId: string;
}
