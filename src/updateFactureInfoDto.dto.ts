// create-FactureInfo.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { FacDevBdl } from '@prisma/client';
import { IsString, IsNumber, IsArray, ValidateNested, IsOptional } from 'class-validator';
import { CreateFacDevBdlDto } from './createFacDevBdl.dto';

export class UpdateFactureInfoDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  readonly numFac: string;
  @ApiProperty()
  @IsString()
  @IsOptional()
  readonly dateFac: string;
  @ApiProperty()
  @IsString()
  @IsOptional()
  readonly docType: string;
  @ApiProperty()
  @IsString()
  @IsOptional()
  readonly ice: string;
  @ApiProperty()
  @IsString()
  @IsOptional()
  readonly adress: string;
  @IsOptional()
  @ApiProperty()
  @IsString()
  readonly clientName: string;
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  readonly totalTTC: number;
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  readonly totalTVA: number;
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  readonly totalHT: number;
  @ApiProperty()
  @IsString()
  @IsOptional()
  readonly userId: string;
  @IsOptional()
  @ApiProperty({ type: [CreateFacDevBdlDto] })
  @IsArray()
  @ValidateNested({ each: true })
  // @Type(() => CreateFacDevBdlDto)
  readonly FacDevBdl: CreateFacDevBdlDto[];

}
