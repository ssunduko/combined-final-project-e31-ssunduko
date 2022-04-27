import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { VideoComponent } from './video/video.component';
import { VideolistComponent } from './videolist/videolist.component';
import { AddvideoComponent } from './addvideo/addvideo.component';
import { UpdatevideoComponent } from './updatevideo/updatevideo.component';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

const routes:Routes = [
  { path: '', redirectTo: '/videolist', pathMatch: 'full'},
  { path: 'videolist', component: VideolistComponent },
  { path: 'video/:id', component: UpdatevideoComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    VideolistComponent,
    AddvideoComponent,
    UpdatevideoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      routes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

