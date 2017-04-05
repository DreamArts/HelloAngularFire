import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline-input',
  templateUrl: './timeline-input.component.html',
  styleUrls: ['./timeline-input.component.scss']
})
export class TimelineInputComponent implements OnInit {
  text = "";
  hasError = false;

  constructor() { }

  ngOnInit() {
  }
  sendMessage(inputText: HTMLTextAreaElement) {
    if (this.check(inputText)) {
      // チェックOK
      this.hasError = false;
      console.log(inputText.value);
      console.log(this.text);
      this.text = "";
    } else {
      // チェックNG
      this.hasError = true;
    }
  }

  private check(inputText: HTMLTextAreaElement): boolean {
    // TODO: 入力チェック処理を実装
    return false;
  }
}
