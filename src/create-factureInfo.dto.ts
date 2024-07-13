// create-FactureInfo.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class CreateFactureInfoDto {
  @ApiProperty()
  @IsString()
  readonly numFac: string;
  @ApiProperty()
  @IsString()
  readonly dateFac: string;
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
}
