import { Component, OnInit, ViewChild } from '@angular/core';
import { MessagesService, MessageData } from '../services/messages.service';

@Component({
  selector: 'app-timeline-input',
  templateUrl: './timeline-input.component.html',
  styleUrls: ['./timeline-input.component.scss']
})
export class TimelineInputComponent implements OnInit {
  hasError = false;

  constructor(private messagesService: MessagesService) { }

  ngOnInit() {
  }

  sendMessage(inputText: HTMLTextAreaElement) {
    const message = new MessageData(null);
    message.text = inputText.value;
    this.messagesService.sendMessage(message);
    inputText.value = "";
  }
}
