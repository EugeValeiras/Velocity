import {Route} from '@angular/router';
import {MessageItemComponent} from './message-item/message-item.component';
import {MessageListComponent} from './message-list/message-list.component';

export const messageRouting: Route[] = [
  {path: '', pathMatch: 'full', redirectTo: '/message/list'},
  {component: MessageListComponent, path: 'list'},
  {component: MessageItemComponent, path: ':id'}
];
