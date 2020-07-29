import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ImageListComponent } from './image-list/image-list.component';
// import { FavComponent } from './fav/fav.component';


const routes: Routes = [
  {path:"",component:ImageListComponent},
  {path:"home",component:ImageListComponent},
  // {path:"fav",component:FavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
