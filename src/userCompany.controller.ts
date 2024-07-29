import {
  Body,
  Controller,
  Get,
  Param,
  Put,
  Post,
  Patch,
  UseInterceptors,
  UploadedFile,
  ParseFilePipeBuilder,
  HttpStatus,
  BadRequestException,
  ParseFilePipe,
  MaxFileSizeValidator,
  FileTypeValidator,
} from '@nestjs/common';
import { userCompanyService } from './userCompany.service';
import { CreateuserCompanyDto } from './create-userCompany.dto';
import { UpdateuserCompanyDto } from './update-userCompany.dto';
// import { UpdateuserCompanyDto } from './create-userCompany.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { CustomUploadFileTypeValidator } from './app.validators';
import { CloudinaryService } from './cloudinary.service';
const MAX_PROFILE_PICTURE_SIZE_IN_BYTES = 2 * 1024 * 1024;
const VALID_UPLOADS_MIME_TYPES = ['image/jpeg', 'image/png'];

@Controller('userCompanys')
export class userCompanyController {
  constructor(
    private userCompanyService: userCompanyService,
    private cloudinaryService: CloudinaryService,
  ) {}

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
    console.log('Before : ' + id);

    return await this.userCompanyService.update(id, updateuserCompanyDto);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  public uploadFile(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 1024 }),
          new FileTypeValidator({ fileType: '.(png|jpeg|jpg)' }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    // console.log(file);

    return this.cloudinaryService.uploadImage(file);
  }
}
