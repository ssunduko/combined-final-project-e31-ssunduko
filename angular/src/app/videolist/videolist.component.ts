import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-videolist',
  templateUrl: './videolist.component.html',
  styleUrls: ['./videolist.component.css'],
  providers: [VideoService]
})

/**
 * Video List Component
 */
export class VideolistComponent implements OnInit {

  constructor(private videoService:VideoService){
  }

  videoList:any = null;

  ngOnInit() {
    this.updateVideoList();
  }

  /**
   * Method for getting list of Videos
   */
  updateVideoList():void{
    //Get all Videos from Video Service
    this.videoService.listVideos().subscribe((videos)=>{
      this.videoList = videos;
    });
  }
}
