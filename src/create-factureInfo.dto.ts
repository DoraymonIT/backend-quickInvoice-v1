// create-FactureInfo.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { FacDevBdl } from '@prisma/client';
import { IsString, IsNumber, IsArray, ValidateNested } from 'class-validator';
import { CreateFacDevBdlDto } from './createFacDevBdl.dto';

export class CreateFactureInfoDto {
  @ApiProperty()
  @IsString()
  readonly numFac: string;
  @ApiProperty()
  @IsString()
  readonly dateFac: string;
  @ApiProperty()
  @IsString()
  readonly docType: string;
  @ApiProperty()
  @IsString()
  readonly ice: string;
  @ApiProperty()
  @IsString()
  readonly adress: string;
  @ApiProperty()
  @IsString()
  readonly clientName: string;
  @ApiProperty()
  readonly totalTTC: number;
  @ApiProperty()
  readonly totalTVA: number;
  @ApiProperty()
  readonly totalHT: number;
  @ApiProperty()
  @IsString()
  readonly userId: string;
  
  @ApiProperty({ type: [CreateFacDevBdlDto] })
  @IsArray()
  @ValidateNested({ each: true })
  // @Type(() => CreateFacDevBdlDto)
  readonly FacDevBdl: CreateFacDevBdlDto[];

}
