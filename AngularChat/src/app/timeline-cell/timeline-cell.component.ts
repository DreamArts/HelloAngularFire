import { Component, OnInit, Input } from '@angular/core';
import { MessageData } from '../services/messages.service';

@Component({
  selector: 'app-timeline-cell',
  templateUrl: './timeline-cell.component.html',
  styleUrls: ['./timeline-cell.component.scss']
})
export class TimelineCellComponent implements OnInit {
  @Input() message: MessageData;
  imageUrl: string = null;
  userImageUrl = "https://github.com/DreamArts/HelloAngularFire/blob/master/AngularChat/src/assets/icons/transparent.png?raw=true";
  constructor() { }

  ngOnInit() {
    if (this.message.isPhoto && this.message.downloadUrl) {
      this.imageUrl = this.message.downloadUrl;
    }
  }
}
