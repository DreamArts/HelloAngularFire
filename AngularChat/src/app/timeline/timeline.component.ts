import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  messagesArray = ["aaa", "bbb", "ccc"];
  constructor() { }

  ngOnInit() {
  }

}
