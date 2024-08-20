import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { FactureInfoService } from './facturesInfo.service';
import { CreateFactureInfoDto } from './create-factureInfo.dto';
import { UpdateFactureInfoDto } from './updateFactureInfoDto.dto';

@Controller('factureInfos')
export class FactureInfoController {
  constructor(private FactureInfoService: FactureInfoService) {}

  @Get('all/:userId')
  public getFactureInfos(@Param('userId') userId: string) {
    return this.FactureInfoService.getFactureAllInfos(userId);
  }

  @Get(':id/:userId')
  findById(@Param('id') id: string, @Param('userId') userId: string) {
    console.log(id);

    return this.FactureInfoService.findById(id, userId);
  }

  @Post()
  async create(@Body() createFactureInfoDto: CreateFactureInfoDto) {
    return this.FactureInfoService.createFactureInfo(createFactureInfoDto);
  }

  @Patch(':id/:userId')
  async update(
    @Param('id') id: string,
    @Param('userId') userId: string,
    @Body() updateFactureInfoDto: UpdateFactureInfoDto,
  ) {
    return await this.FactureInfoService.updateFactureInfo(
      id,
      userId,
      updateFactureInfoDto,
    );
  }
  @Delete(':id/:userId')
  async deleteProduct(
    @Param('id') id: string,
    @Param('userId') userId: string,
  ) {
    return await this.FactureInfoService.deleteFactureInfo(id, userId);
  }
}
