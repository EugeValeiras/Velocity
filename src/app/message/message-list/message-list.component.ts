import {Component, Input, OnInit} from '@angular/core';
import {Message} from '../../model/message';
import {MessagesService} from '../../service/messages.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  showMessages: boolean;

  constructor(
    public messagesService: MessagesService
  ) { }

  ngOnInit() {}

  toggleShowMessage() {
    this.showMessages = !this.showMessages;
  }

}
