import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(
    public productService: ProductService
  ) { }

  ngOnInit() {
  }

}
