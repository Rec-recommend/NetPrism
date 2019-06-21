import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieRecommendationComponent } from './Components/movie-recommendation/movie-recommendation.component';
import { MovieListComponent } from './Components/movie-list/movie-list.component';
import { MovieShowComponent } from './Components/movie-show/movie-show.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieShowComponent,
    MovieRecommendationComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
