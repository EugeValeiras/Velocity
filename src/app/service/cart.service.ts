import { Injectable } from '@angular/core';
import {Product} from '../model/product';
import {ProductService} from './product.service';

@Injectable()
export class CartService {

  products: Product[] = [];

  constructor(
    private productService: ProductService
  ) { }

  removeProductById(id: string) {
    const index = this.products.findIndex(product => product.id === id);
    this.products.splice(index, 1);
  }

  buy(id) {
    const product = this.productService.getProductById(id);
    this.products.push(product);
  }

  count() {
    return this.products.length;
  }

  total() {
    return this.products.map(product => product.price).reduceRight((acum, price) => price + acum, 0);
  }

}
