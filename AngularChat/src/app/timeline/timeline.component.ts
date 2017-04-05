import { Component, OnInit } from '@angular/core';
import { MessagesService, MessageData } from '../services/messages.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  providers: [MessagesService]
})
export class TimelineComponent implements OnInit {
  messagesArray: Array<MessageData>;
  constructor(private messagesService: MessagesService) { }

  ngOnInit() {
    this.messagesService.observeMessages((messages) => {
      this.messagesArray = messages;
    });
  }

}
