import {Component, Input, OnInit} from '@angular/core';
import {Message} from '../../model/message';
import {ActivatedRoute} from '@angular/router';
import {MessagesService} from '../../service/messages.service';

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent implements OnInit {

  messageId: string;
  message: Message;

  constructor(
    private activatedRoute: ActivatedRoute,
    private messagesService: MessagesService) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(params => {
        this.messageId = params.id;
        this.message = this.messagesService.getMessage(this.messageId);
      })
  }

}
