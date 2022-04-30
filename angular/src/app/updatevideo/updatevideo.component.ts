import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {VideoService} from '../video.service';

@Component({
  selector: 'app-updatevideo',
  templateUrl: './updatevideo.component.html',
  styleUrls: ['./updatevideo.component.css'],
  providers: [ VideoService ]
})
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

  getVideo(): void{
    const param:any = this.route.snapshot.paramMap.get('id');
    this.videoService.getVideo(param)
      .subscribe((video) => {
        this.video = video;
      });
  }

  cancel(){
    this.router.navigate(['/videolist']);
  }

  addReview():void {

    if(this.rating && this.review) {

      this.video.reviews.push({rating: this.rating, review: this.review});

      var sum = 0;
      for (var _i = 0; _i < this.video.reviews.length; _i++) {
        sum = sum + Number(this.video.reviews[_i].rating);
      }
      this.video.averageRating = (sum / this.video.reviews.length).toFixed(2);
      this.videoService.updateVideo(this.video._id, this.video)
        .subscribe((result) => {
          this.router.navigate(['/videolist']);
        });
    }
  }

  updateVideo(obj:any):void {
    this.video.title = obj.title;
    this.video.description = obj.description;
    this.videoService.updateVideo(this.video._id, this.video)
      .subscribe((result)=>{
        this.router.navigate(['/videolist']);
      });
  }

  deleteVideo(){
    this.videoService.deleteVideo(this.video._id)
        .subscribe((result)=>{
          this.router.navigate(['/videolist']);
        })
  }
}
