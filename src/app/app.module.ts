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
import { LoginService } from './services/login.service';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieGridComponent } from './components/movie-grid/movie-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieShowComponent,
    MovieRecommendationComponent,
    MovieListComponent,
    LoginComponent,
    HomeComponent,
    MovieCardComponent,
    MovieGridComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [MovieService, GoogleService, RecommendationService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
