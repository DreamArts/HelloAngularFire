import { Injectable, Inject } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase';
import { CurrentUser } from './login.service';

namespace FirebaseKeys {
  export const MESSAGES = "/messages";
}

@Injectable()
export class MessagesService {

  constructor(private af: AngularFire, @Inject(FirebaseApp) private firApp: firebase.app.App) { }

  observeMessages(success: (messages: Array<MessageData>) => void) {
    this.af.database.list(FirebaseKeys.MESSAGES).subscribe((items) => {
      const messages = new Array<MessageData>();
      for (const item of items) {
        messages.push(new MessageData(item));
      }
      if (success) {
        success(messages);
      }
    }, (error) => {
      
    });
  }

  sendMessage(message: MessageData): firebase.database.ThenableReference {
    return this.af.database.list(FirebaseKeys.MESSAGES).push(message);
  }

  sendFiles(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      const file = files.item(i);
      const msg = new MessageData(null);
      msg.fileType = file.type;
      msg.fileName = file.name;
      const msgRef = this.sendMessage(msg);
      const storagePath = FirebaseKeys.MESSAGES + "/" + msgRef.key + "_" + msg.fileName;
      const storageRef = this.firApp.storage().ref().child(storagePath);
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
  userImageUrl: string;
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
      this.createdUserName = CurrentUser.userName();
      this.userImageUrl = CurrentUser.photoUrl();
      this.createdAt = firebase.database.ServerValue.TIMESTAMP;
    }
  }

  isPhoto(): boolean {
    return (this.fileType && this.fileType.match(/image\/.*/ig)) ? true : false;
  }
}