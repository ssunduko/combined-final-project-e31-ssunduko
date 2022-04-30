import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

/**
 * Video Service for handling Video CRUD Operations
 */
@Injectable()
export class VideoService {

  private url:string = environment.url;

  constructor(private http:HttpClient) { }

  /**
   * Method for getting all Videos
   */
  listVideos(){
    //Call node api
    return this.http.get(this.url);
  }

  /**
   * Method for getting Video By Id
   * @param id
   */
  getVideo(id:string){
    //Call node api
    return this.http.get(this.url + id);
  }

  /**
   * Method for saving Video
   * @param video
   */
  createVideo(video: FormData){
    //Call node api
    return this.http.post(this.url, video);
  }

  /**
   * Method for updating Video
   * @param id
   * @param data
   */
  updateVideo(id:string, data:any){
    //Call node api
    return this.http.put(this.url + id, data);
  }

  /**
   * Method for deleting Video
   * @param id
   */
  deleteVideo(id:string){
    //Call node api
    return this.http.delete(this.url + id);
  }
}
