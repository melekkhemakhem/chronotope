import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  {path: "gallery",component:GalleryComponent},
  {path: "", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
