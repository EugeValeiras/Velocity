import {NgModule} from '@angular/core';
import {CartComponent} from './cart/cart.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {CommonModule} from '@angular/common';
import {CoreModule} from '../core/core.module';
import {RouterModule} from '@angular/router';
import {buyRoting} from './buy.routing';

@NgModule({
  declarations: [
    CartComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(buyRoting),
  ],
  providers: []
})
export class BuyModule { }
