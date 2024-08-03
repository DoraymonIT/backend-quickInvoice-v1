import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductService } from './products.service';
import { CreateProductDto } from './create-product.dto';
import { UpdateProductDto } from './update-product.dto';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  public getProducts() {
    return this.productService.getProducts();
  }

  // @Post()
  // public createProduct(data: Product) {
  //   this.productService.createProduct(data);
  // }
  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    return this.productService.createProduct(createProductDto);
  }
  @Get(':ref')
  async findByRef(@Param('ref') ref: string) {
    return await this.productService.findByRef(ref);
  }
  @Get(':designation')
  async findByDesignation(@Param('designation') designation: string) {
    return await this.productService.findByDesignation(designation);
  }
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.productService.findOne(id);
  }

  // @Patch(':id')
  // async update(
  //   @Param('id') id: any,
  //   @Body() updateProductDto: UpdateProductDto,
  // ) {
  //   return await this.productService.update(id, updateProductDto);
  // }
}
