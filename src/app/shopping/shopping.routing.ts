import {Route} from '@angular/router';
import {ShopComponent} from './shop/shop.component';
import {ItemViewComponent} from './item-view/item-view.component';

export const shoppingRoting: Route[] = [
  {path: '', pathMatch: 'full', redirectTo: '/shopping/shop'},
  {path: 'shop', component: ShopComponent},
  {path: 'product/:id', component: ItemViewComponent},
];
