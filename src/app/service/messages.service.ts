import { Injectable } from '@angular/core';
import {Message} from '../model/message';

@Injectable()
export class MessagesService {

  messages: Message[] = [
    {id: '1', value: 'Message 1'},
    {id: '2', value: 'Message 2'},
    {id: '3', value: 'Message 3'},
    {id: '4', value: 'Message 4'},
  ];

  constructor() { }

  getMessage(id) {
    return this.messages.find(message => message.id === id);
  }

  removeMessage(id) {
    const index = this.messages.findIndex(message => message.id === id);
    this.messages.splice(index, 1);
  }

}
