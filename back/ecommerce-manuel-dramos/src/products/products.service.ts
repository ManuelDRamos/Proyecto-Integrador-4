import { Injectable } from '@nestjs/common';
import { productsRepository } from './products.repository';

@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: productsRepository) {}
  getProducts() {
    return this.productsRepository.getProducts();
  }
}
