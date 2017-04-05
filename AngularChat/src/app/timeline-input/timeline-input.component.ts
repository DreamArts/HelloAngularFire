import { Component, OnInit } from '@angular/core';
import { MessagesService, MessageData } from '../services/messages.service';

@Component({
  selector: 'app-timeline-input',
  templateUrl: './timeline-input.component.html',
  styleUrls: ['./timeline-input.component.scss'],
  providers: [MessagesService]
})
export class TimelineInputComponent implements OnInit {
  hasError = false;

  constructor(private messagesService: MessagesService) { }

  ngOnInit() {
    this.observeFileSelection();
  }

  /** メッセージの送信 */
  sendMessage(inputText: HTMLTextAreaElement) {
    const message = new MessageData(null);
    message.text = inputText.value;
    this.messagesService.sendMessage(message);
    inputText.value = "";
  }

  /** ファイルの選択を監視 */
  private observeFileSelection() {
    const inputTag = document.getElementById("InputFiles");
    if (inputTag) {
      inputTag.addEventListener("change", (event) => {
        const target = <HTMLInputElement>event.target;
        this.uploadFiles(target.files);
      });
    }
  }

  /** ファイルのアップロード */
  private uploadFiles(files: FileList) {
    this.messagesService.sendFiles(files);
  }
}
