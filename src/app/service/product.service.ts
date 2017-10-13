import { Injectable } from '@angular/core';
import {Product} from '../model/product';
import {Http, Response} from '@angular/http';

import 'rxjs/add/operator/map';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class ProductService {

  private apiURL = 'http://api.eugeniovaleiras.com/api';

  // products: Product[] = [
  //   {id: '1', name: 'Banana', description: 'Banana Loca', price: 10},
  //   {id: '2', name: 'Apple', description: 'Apple Inc', price: 10000},
  //   {id: '3', name: 'Orange', description: 'La naranja mecanica', price: 5},
  //   {id: '4', name: 'lemon', description: 'Acid Lemon', price: 1},
  // ];

  private _productsSnapshoot: Product[] = [];
  private productsSubject = new BehaviorSubject<Product[]>([]);
  public products$ = this.productsSubject.asObservable();

  get products(): Product[] {
    return this._productsSnapshoot;
  }

  set products(products: Product[]) {
    this._productsSnapshoot = products;
    this.productsSubject.next(products);
  }

  constructor(
    private http: Http
  ) {
    http.get(`${this.apiURL}/product`)
      .map((response: Response) => response.json())
      .subscribe((products: Product[]) => this.products = products);
  }

  getProductById(id): Product {
    return this.products.find(product => product.id === id);
  }

  removeProductById(id: string) {
    const index = this.products.findIndex(product => product.id === id);
    this.products.splice(index, 1);
  }

}
