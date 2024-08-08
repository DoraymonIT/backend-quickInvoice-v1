// create-userCompany.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class UpdateuserCompanyDto {
  //   @IsString()
  //   readonly id: string;

  @ApiProperty()
  @IsString()
  readonly userComapnyRC: string;
  @ApiProperty()
  @IsString()
  readonly userComapnyPatente: string;
  @ApiProperty()
  @IsString()
  readonly userComapnyIS: string;
  @ApiProperty()
  @IsString()
  readonly userComapnyICE: string;
  @ApiProperty()
  @IsString()
  readonly userComapnyPhone2: string;
  @ApiProperty()
  @IsString()
  readonly userComapnyPhone1: string;
  @ApiProperty()
  @IsString()
  readonly userComapnyAdress: string;
  @ApiProperty()
  @IsString()
  readonly userComapnyName: string;
  @ApiProperty()
  @IsString()
  readonly userComapnyLogo: string;
  @ApiProperty()
  @IsString()
  readonly userComapnyCNSS: string;
  @ApiProperty()
  @IsString()
  readonly userComapnyEmail: string;
  @ApiProperty()
  @IsString()
  readonly userId: string;
}
