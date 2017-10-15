import { Injectable } from '@angular/core';
import {Product} from '../model/product';
import {ProductService} from './product.service';
import {CookieService} from 'ngx-cookie';

@Injectable()
export class CartService {

  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private cookieService: CookieService
  ) {
    this.products = <Product[]>this.cookieService.getObject('products') || [];
  }

  removeProductById(id: string) {
    const index = this.products.findIndex(product => product.id === id);
    this.products.splice(index, 1);
    this.cookieService.remove('products', this.products);
  }

  buy(id) {
    const product = this.productService.getProductById(id);
    this.products.push(product);
    this.cookieService.putObject('products', this.products);
  }

  count() {
    return this.products.length;
  }

  total() {
    return this.products.map(product => product.price).reduceRight((acum, price) => price + acum, 0);
  }

}
