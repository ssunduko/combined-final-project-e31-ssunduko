import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {VideoService} from '../video.service';

@Component({
  selector: 'app-updatevideo',
  templateUrl: './updatevideo.component.html',
  styleUrls: ['./updatevideo.component.css'],
  providers: [ VideoService ]
})
/**
 * Update Video Component
 */
export class UpdatevideoComponent implements OnInit {
  video:any;
  review: any;
  rating: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private videoService:VideoService ) { }

  ngOnInit() {
    this.getVideo();
  }

  /**
   * Method for Video extraction
   */
  getVideo(): void{
    const param:any = this.route.snapshot.paramMap.get('id');
    //Get Video by Id from Video Service
    this.videoService.getVideo(param)
      .subscribe((video) => {
        this.video = video;
      });
  }

  /**
   * Method for handling cancel click
   */
  cancel(){
    //Navigate to the home page
    this.router.navigate(['/videolist']);
  }

  /**
   * Method for handling adding Reviews to Videos
   */
  addReview():void {
    //Check to see if Rating and Review is not empty, null or undefined
    if(this.rating && this.review) {

      //Add Review to the Video Review array
      this.video.reviews.push({rating: this.rating, review: this.review});

      //Recalculate Rating Average
      var sum = 0;
      for (var _i = 0; _i < this.video.reviews.length; _i++) {
        sum = sum + Number(this.video.reviews[_i].rating);
      }
      this.video.averageRating = (sum / this.video.reviews.length).toFixed(2);

      //Call Video Service to update the Video
      this.videoService.updateVideo(this.video._id, this.video)
        .subscribe((result) => {
          this.router.navigate(['/videolist']);
        });
    }
  }

  /**
   * Method for handling Video Title and Description update
   * @param video
   */
  updateVideo(video:any):void {
    this.video.title = video.title;
    this.video.description = video.description;
    //Call Video Service to update the Video
    this.videoService.updateVideo(this.video._id, this.video)
      .subscribe((result)=>{
        this.router.navigate(['/videolist']);
      });
  }

  /**
   * Method for handling Video deletion
   */
  deleteVideo(){
    this.videoService.deleteVideo(this.video._id)
        .subscribe((result)=>{
          this.router.navigate(['/videolist']);
        })
  }
}
