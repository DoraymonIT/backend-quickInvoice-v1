import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductService } from './products.service';
import { CreateProductDto } from './create-product.dto';
import { UpdateProductDto } from './update-product.dto';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('all/:userId')
  public getProducts(@Param('userId') userId: string) {
    return this.productService.getProducts(userId);
  }

  // @Post()
  // public createProduct(data: Product) {
  //   this.productService.createProduct(data);
  // }
  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    return this.productService.createProduct(createProductDto);
  }
  @Get(':ref/:userId')
  findByRef(@Param('ref') ref: string,@Param('userId') userId: string) {
    console.log(ref);

    return this.productService.findByRef(ref,userId);
  }
  @Get(':designation')
  async findByDesignation(@Param('designation') designation: string) {
    return await this.productService.findByDesignation(designation);
  }
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.productService.findOne(id);
  }
  @Delete(':id')
  async deleteProduct(@Param('id') id: string) {
    return await this.productService.deleteProduct(id);
  }

  // @Patch(':id')
  // async update(
  //   @Param('id') id: any,
  //   @Body() updateProductDto: UpdateProductDto,
  // ) {
  //   return await this.productService.update(id, updateProductDto);
  // }
}
