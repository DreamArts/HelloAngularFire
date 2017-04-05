import { Component, OnInit } from '@angular/core';
import { MessagesService, MessageData } from '../services/messages.service';

@Component({
  selector: 'app-timeline-input',
  templateUrl: './timeline-input.component.html',
  styleUrls: ['./timeline-input.component.scss'],
  providers: [MessagesService]
})
export class TimelineInputComponent implements OnInit {
  text = "";
  hasError = false;

  constructor(private messagesService: MessagesService) { }

  ngOnInit() {
  }
  sendMessage(inputText: HTMLTextAreaElement) {
    if (this.check(inputText)) {
      // チェックOK
      this.hasError = false;
      const message = new MessageData(null);
      message.text = inputText.value;
      this.messagesService.sendMessage(message);
      inputText.value = "";
    } else {
      // チェックNG
      this.hasError = true;
    }
  }

  private check(inputText: HTMLTextAreaElement): boolean {
    // TODO: 入力チェック処理を実装
    return (inputText && inputText.value) ? true : false;
  }
}
