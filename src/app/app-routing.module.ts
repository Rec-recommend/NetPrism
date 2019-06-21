import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieShowComponent } from './components/movie-show/movie-show.component';

const routes: Routes = [
  {path: '', component: MovieListComponent},
  {path: 'movies', component: MovieListComponent},
  {path: 'movies/:id', component: MovieShowComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
