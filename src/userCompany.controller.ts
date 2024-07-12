import { Body, Controller, Get, Param, Put, Post } from '@nestjs/common';
import { userCompanyService } from './userCompany.service';
import { CreateuserCompanyDto } from './create-userCompany.dto';
import { UpdateuserCompanyDto } from './update-userCompany.dto';
// import { UpdateuserCompanyDto } from './create-userCompany.dto';

@Controller('userCompanys')
export class userCompanyController {
  constructor(private userCompanyService: userCompanyService) {}

  @Get()
  public getuserCompanys() {
    return this.userCompanyService.getuserCompanys();
  }

  // @Post()
  // public createuserCompany(data: userCompany) {
  //   this.userCompanyService.createuserCompany(data);
  // }
  @Post()
  async create(@Body() createuserCompanyDto: UpdateuserCompanyDto) {
    return this.userCompanyService.createuserCompany(createuserCompanyDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: any,
    @Body() updateuserCompanyDto: UpdateuserCompanyDto,
  ) {
    // console.log('Before : ',id);
    
    return await this.userCompanyService.update(id, updateuserCompanyDto);
  }
}
