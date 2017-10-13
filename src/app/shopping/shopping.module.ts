import { NgModule } from '@angular/core';

import {CommonModule} from '@angular/common';
import {CoreModule} from '../core/core.module';
import {ShopComponent} from './shop/shop.component';
import {ItemViewComponent} from './item-view/item-view.component';
import {RouterModule} from '@angular/router';
import {shoppingRoting} from './shopping.routing';

@NgModule({
  declarations: [
    ShopComponent,
    ItemViewComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(shoppingRoting),
  ],
  providers: []
})
export class ShoppingModule { }
