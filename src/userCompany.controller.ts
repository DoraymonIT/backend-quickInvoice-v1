import { Body, Controller, Get, Param, Put, Post, Patch, UseInterceptors, UploadedFile, ParseFilePipeBuilder, HttpStatus } from '@nestjs/common';
import { userCompanyService } from './userCompany.service';
import { CreateuserCompanyDto } from './create-userCompany.dto';
import { UpdateuserCompanyDto } from './update-userCompany.dto';
// import { UpdateuserCompanyDto } from './create-userCompany.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { CustomUploadFileTypeValidator } from './app.validators';
const MAX_PROFILE_PICTURE_SIZE_IN_BYTES = 2 * 1024 * 1024;
const VALID_UPLOADS_MIME_TYPES = ['image/jpeg', 'image/png'];

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

  @Patch(':id')
  async update(
    @Param('id') id: any,
    @Body() updateuserCompanyDto: UpdateuserCompanyDto,
  ) {
    console.log('Before : '+id);
    
    return await this.userCompanyService.update(id, updateuserCompanyDto);
  }


  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  public async uploadFile(
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addValidator(
          new CustomUploadFileTypeValidator({
            fileType: VALID_UPLOADS_MIME_TYPES,
          }),
        )
        .addMaxSizeValidator({ maxSize: MAX_PROFILE_PICTURE_SIZE_IN_BYTES })
        .build({ errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY }),
    )
    file,
  ) {
    return "file upload successful";
  }

}
