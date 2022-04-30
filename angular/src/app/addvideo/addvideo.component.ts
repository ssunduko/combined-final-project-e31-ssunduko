import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-addvideo',
  templateUrl: './addvideo.component.html',
  styleUrls: ['./addvideo.component.css']
})

/**
 * Add Video Component
 */
export class AddvideoComponent implements OnInit {

  @Output() newVideo = new EventEmitter();

  video:any = {}
  reviews:any ={}

  constructor(private videoService:VideoService) { }

  ngOnInit(){
  }

  /**
   * Create New Video Method
   * @param addVideoForm
   */
  save(addVideoForm:any) : void {

    //Populate FormData from html
    let formData = new FormData()
    let formReviews = { rating: this.reviews.rating, review: this.reviews.review};
    formData.append('title', this.video.title);
    formData.append('description', this.video.description);
    formData.append('averageRating', this.reviews.rating);
    formData.append('reviews', JSON.stringify(formReviews));

    //Invoke Video Service to create video
    this.videoService.createVideo(formData)
      .subscribe((video)=>{
        this.newVideo.emit();
        addVideoForm.reset();
      });
  }
}
