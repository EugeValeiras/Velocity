import {Component, Input, OnInit} from '@angular/core';
import {Message} from '../../model/message';
import {MessagesService} from '../../service/messages.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-message-list-item',
  templateUrl: './message-list-item.component.html',
  styleUrls: ['./message-list-item.component.css']
})
export class MessageListItemComponent implements OnInit {

  @Input('message') message: Message;

  constructor(
    private messagesService: MessagesService
  ) { }

  ngOnInit() {}

  onRemove(id) {
    this.messagesService.removeMessage(id);
  }

}
