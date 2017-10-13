import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {MessageItemComponent} from './message-item/message-item.component';
import {MessageListItemComponent} from './message-list-item/message-list-item.component';
import {MessageListComponent} from './message-list/message-list.component';
import {messageRouting} from './message.routing';
import {CommonModule} from '@angular/common';
import {CoreModule} from '../core/core.module';


@NgModule({
  declarations: [
    MessageItemComponent,
    MessageListItemComponent,
    MessageListComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(messageRouting)
  ]
})
export class MessageModule { }
