// create-company.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCompanyDto {
  //   @IsString()
  //   readonly id: string;
  @ApiProperty()
  @IsString()
  readonly nom: string;
  @ApiProperty()
  @IsString()
  readonly ice: string;

  @ApiProperty()
  @IsString()
  readonly adress: string;
  @ApiProperty()
  @IsString()
  readonly userId: string;
}
