import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import * as firebase from 'firebase';


@Injectable()
export class MessagesService {

  constructor(private af: AngularFire) { }

  observeMessages(success: (messages: Array<MessageData>) => void) {
    this.af.database.list("/messages").subscribe((items) => {
      const messages = new Array<MessageData>();
      for (const item of items) {
        messages.push(new MessageData(item));
      }
      success(messages);
    });
  }

  sendMessage(message: MessageData) {
        this.af.database.list("/messages").push(message);
  }

}

export class MessageData {
  messageId: string;
  text: string;
  createdUserName: string;
  createdBy: string;
  createdAt: any;

  constructor(item) {
    if (item) {
      this.messageId = item.$key;
      for (const key of Object.keys(item)) {
        this[key] = item[key];
      }
    } else {
      this.createdUserName = "伊勢川 暁";
      this.createdAt = firebase.database.ServerValue.TIMESTAMP;
    }
  }
}
