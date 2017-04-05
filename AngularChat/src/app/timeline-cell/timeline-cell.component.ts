import { Component, OnInit, Input } from '@angular/core';
import { MessageData } from '../services/messages.service';

@Component({
  selector: 'app-timeline-cell',
  templateUrl: './timeline-cell.component.html',
  styleUrls: ['./timeline-cell.component.scss']
})
export class TimelineCellComponent implements OnInit {
  @Input() message: MessageData;

  userImageUrl: string = "./assets/icons/transparent.png";
  imageUrl: string = null;

  constructor() { }

  ngOnInit() {
    if (this.message && this.message.isPhoto && this.message.downloadUrl) {
      this.imageUrl = this.message.downloadUrl;
    }
    if (this.message && this.message.userImageUrl) {
      this.userImageUrl = this.message.userImageUrl;
    }
  }

}
