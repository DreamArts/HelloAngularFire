import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import * as firebase from 'firebase';


@Injectable()
export class MessagesService {

  constructor(private af: AngularFire) { }

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
      // TODO: 受け取ったオブジェクトをMessageDataのプロパティにマッピングする
    } else {
      this.createdUserName = "伊勢川 暁";
      this.createdAt = firebase.database.ServerValue.TIMESTAMP;
    }
  }
}
