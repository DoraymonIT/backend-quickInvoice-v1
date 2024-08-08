import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { FactureInfoService } from './facturesInfo.service';
import { CreateFactureInfoDto } from './create-factureInfo.dto';

@Controller('factureInfos')
export class FactureInfoController {
  constructor(private FactureInfoService: FactureInfoService) {}

  @Get(':userId')
  public getFactureInfos(@Param('userId') userId: string) {
    return this.FactureInfoService.getFactureAllInfos(userId);
  }

  @Post()
  async create(@Body() createFactureInfoDto: CreateFactureInfoDto) {
    return this.FactureInfoService.createFactureInfo(createFactureInfoDto);
  }
}
