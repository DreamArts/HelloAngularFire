import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessagesService, MessageData } from '../services/messages.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  providers: [MessagesService, LoginService]
})
export class TimelineComponent implements OnInit {
  messagesArray: Array<MessageData>;

  constructor(private messages: MessagesService, private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.loginService.isLoggedIn((isLoggedIn) => {
      if (!isLoggedIn) {
        this.router.navigate([""]);
      }
    });

    this.messages.observeMessages((messages) => {
      this.messagesArray = messages;
    });
  }


}
