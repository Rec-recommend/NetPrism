import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieShowComponent } from './components/movie-show/movie-show.component';
import { MovieRecommendationComponent } from './components/movie-recommendation/movie-recommendation.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieService } from './services/movie.service';
import { GoogleService } from './services/google.service';
import { RecommendationService } from './services/recommendation.service';

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
  providers: [MovieService, GoogleService, RecommendationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
