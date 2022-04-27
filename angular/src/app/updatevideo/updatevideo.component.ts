import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-updatevideo',
  templateUrl: './updatevideo.component.html',
  styleUrls: ['./updatevideo.component.css'],
  providers: [ VideoService ]
})
export class UpdatevideoComponent implements OnInit {
  video:any;

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

  updateVideo(obj:any):void {
    this.video.title = obj.titleField;
    this.video.description = obj.descField;
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
