import {NgModule} from '@angular/core';
import {OrderByPipe} from './pipe/order-by.pipe';
import {ButtonDirective} from './directive/button.directive';

@NgModule({
  declarations: [
    OrderByPipe,
    ButtonDirective
  ],
  imports: [ ],
  exports: [
    OrderByPipe,
    ButtonDirective
  ]
})
export class CoreModule { }
