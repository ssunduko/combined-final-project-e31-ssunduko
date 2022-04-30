import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})

/**
 * Video Component
 */
export class VideoComponent{

  @Input() video:any;
  constructor() {
  }
}
