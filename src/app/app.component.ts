import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showMessages = true;

  messages = [
    {value: 'Message 1'},
    {value: 'Message 2'},
    {value: 'Message 3'},
    {value: 'Message 4'},
  ];

  toggleShowMessage() {
    this.showMessages = !this.showMessages;
  }



}
