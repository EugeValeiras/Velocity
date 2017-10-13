import {Route} from '@angular/router';

export const appRouting: Route[] = [
  {path: '', pathMatch: 'full', redirectTo: 'message'},
  {path: 'message', loadChildren: './message/message.module.ts#MessageModule'}
]
