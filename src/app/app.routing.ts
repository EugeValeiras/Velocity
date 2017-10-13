import {Route} from '@angular/router';

export const appRoting: Route[] = [
  {path: '', pathMatch: 'full', redirectTo: '/shopping/shop'},
  {path: 'shopping', loadChildren: './shopping/shopping.module.ts#ShoppingModule'},
  {path: 'buy', loadChildren: './buy/buy.module.ts#BuyModule'},
]
