import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class CreateFacDevBdlDto {
  @ApiProperty()
  @IsString()
  readonly ref: string;

  @ApiProperty()
  @IsString()
  readonly designation: string;

  @ApiProperty()
//   @IsString()
  readonly qtte: string;

  @ApiProperty()
  @IsNumber()
  readonly pu_ht: number;

  @ApiProperty()
  @IsNumber()
  readonly total_ht: number;
}
