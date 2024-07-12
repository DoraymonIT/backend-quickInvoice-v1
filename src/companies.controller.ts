import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateProductDto } from './create-product.dto';
import { UpdateProductDto } from './update-product.dto';
import { CompanyService } from './companies.service';
import { CreateCompanyDto } from './create-company.dto';

@Controller('companies')
export class ComapnyController {
  constructor(private comanyService: CompanyService) {}

  @Get()
  public getProducts() {
    return this.comanyService.getCompanies();
  }

  // @Post()
  // public createProduct(data: Product) {
  //   this.productService.createProduct(data);
  // }
  @Post()
  async create(@Body() createCompanyDto: CreateCompanyDto) {
    return this.comanyService.createProduct(createCompanyDto);
  }
  @Get(':ice')
  async findByIce(@Param('ice') ice: string) {
    return await this.comanyService.findByIce(ice);
  }
  @Get(':nom')
  async findByNom(@Param('nom') nom: string) {
    return await this.comanyService.findByNom(nom);
  }
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.comanyService.findOne(id);
  }

//   @Patch(':id')
//   async update(
//     @Param('id') id: string,
//     @Body() updateProductDto: UpdateProductDto,
//   ) {
//     return await this.comanyService.update(+id, updateProductDto);
//   }
}
