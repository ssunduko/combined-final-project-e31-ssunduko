import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class VideoService {

  private apiurl:string = environment.apiurl;

  constructor(private http:HttpClient) { }

  listVideos(){
    return this.http.get(this.apiurl);
  }

  getVideo(id:string){
    return this.http.get(this.apiurl + id);
  }

  createVideo(video: FormData){
    return this.http.post(this.apiurl, video);
  }

  updateVideo(id:string, data:any){
    return this.http.put(this.apiurl + id, data);
  }

  deleteVideo(id:string){
    return this.http.delete(this.apiurl + id);
  }

}
