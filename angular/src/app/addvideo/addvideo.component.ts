import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-addvideo',
  templateUrl: './addvideo.component.html',
  styleUrls: ['./addvideo.component.css']
})
export class AddvideoComponent implements OnInit {

  @Output() newVideo = new EventEmitter();

  video:any = {}
  reviews:any ={}

  constructor(private videoService:VideoService) { }

  ngOnInit(){
  }

  save(addVideoForm:any) : void {
    let formData = new FormData()
    let formReviews = { rating: this.reviews.rating, review: this.reviews.review};
    formData.append('title', this.video.title);
    formData.append('description', this.video.description);
    formData.append('averageRating', this.reviews.rating);
    formData.append('reviews', JSON.stringify(formReviews));
    this.videoService.createVideo(formData)
      .subscribe((video)=>{
        this.newVideo.emit();
        addVideoForm.reset();
      });
  }
}
