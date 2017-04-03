import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MessageData } from '../services/messages.service';

@Component({
  selector: 'app-timeline-cell',
  templateUrl: './timeline-cell.component.html',
  styleUrls: ['./timeline-cell.component.scss']
})
export class TimelineCellComponent implements OnInit {
  @Input() message: MessageData;

  userImageUrl: string = "./assets/icons/transparent.png";

  constructor() { }

  ngOnInit() {
  }

}
