import { Injectable, Inject } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase';

@Injectable()
export class MessagesService {

  constructor(private af: AngularFire, @Inject(FirebaseApp) private firApp: firebase.app.App) { }

  observeMessages(success: (messages: Array<MessageData>) => void) {
    this.af.database.list("/messages").subscribe((items) => {
      const messages = new Array<MessageData>();
      for (const item of items) {
        messages.push(new MessageData(item));
      }
      success(messages);
    });
  }

  sendMessage(message: MessageData): firebase.database.ThenableReference {
    return this.af.database.list("/messages").push(message);
  }

  sendFiles(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      const file = files.item(i);
      // 3-1. メッセージを投稿してIDを取得
      const msg = new MessageData(null);
      msg.fileType = file.type;
      msg.fileName = file.name;
      const msgRef = this.sendMessage(msg);
      // 3-2. メッセージのIDをストレージのパスにセット
      const storagePath = "/messages/" + msgRef.key + "_" + msg.fileName;
      const storageRef = this.firApp.storage().ref().child(storagePath);
      // 3-3. ファイルをストレージにアップロードし、完了したらメッセージデータを更新
      const task = storageRef.put(file);
      task.then((snapshot) => {
        msg.filePath = snapshot.metadata.fullPath;
        msg.downloadUrl = snapshot.downloadURL;
        msgRef.set(msg);
      });
    }
  }
}

export class MessageData {
  messageId: string;
  text: string;
  createdUserName: string;
  createdBy: string;
  createdAt: any;
  fileType: string;
  fileName: string;
  filePath: string;
  downloadUrl: string;

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

  isPhoto(): boolean {
    return (this.fileType && this.fileType.match(/image\/.*/ig)) ? true : false;
  }
}
