import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../model/product';
import {CartService} from '../../service/cart.service';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css']
})
export class ItemViewComponent implements OnInit {

  productId: string;
  product: Product;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(params => {
        this.product = <Product>{};
        this.productId = params.id;
        this.product = this.productService.getProductById(this.productId);
      });
  }

  buyProduct() {
    this.cartService.buy(this.product.id);
  }

}
