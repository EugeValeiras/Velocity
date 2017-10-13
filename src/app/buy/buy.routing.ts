import {Route} from '@angular/router';
import {CartComponent} from './cart/cart.component';
import {CheckoutComponent} from './checkout/checkout.component';

export const buyRoting: Route[] = [
  {path: '', pathMatch: 'full', redirectTo: '/buy/cart'},
  {path: 'cart', component: CartComponent},
  {path: 'checkout', component: CheckoutComponent},
];
