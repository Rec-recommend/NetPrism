import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MovieService } from './movie.service';
import { Movie } from '../models/movie';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {
  private similarMovies: Subject<Movie[]> = new Subject();
  private userRecommendations: Subject<Movie[]> = new Subject();
  private apiMoviesUrl = 'http://netprism.recoprism.ml/api/recommendations/items/';
  private apiUsersUrl = 'http://netprism.recoprism.ml/api/recommendations/users/';

  constructor(
    private movieService: MovieService,
    private loginService: LoginService
  ) {
    this.loginService
    .getLoggedInUser()
    .subscribe(
      userId => {
        if (userId !== -1){
          this.fetchUserRecommendationsFromApi(userId);
        }
      }
    );
  }

  public fetchSimilarMovies = (movieId: number) => {
    this.fetchSimilarMoviesFromApi(movieId);
    return this.similarMovies;
  }

  public fetchUserRecommendations = () => {
    return this.userRecommendations;
  }

  private fetchSimilarMoviesFromApi = (movieId: number) => {
    fetch(this.apiMoviesUrl + movieId)
      .then(data => data.json())
      .then(res =>
        this.similarMovies.next(
          this.movieService.find(res.items) // get array of movie model
        )
      );
  }

  private fetchUserRecommendationsFromApi = (userId: number) => {
    fetch(this.apiUsersUrl + userId)
      .then(data => data.json())
      .then(res =>
        this.userRecommendations.next(
          this.movieService.find(res.items)
        )
      );
  }

}

