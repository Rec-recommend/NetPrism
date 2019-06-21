import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MovieService } from './movie.service';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {
  private similarMovies: Subject<Movie[]> = new Subject();
  private apiMoviesUrl = 'http://netprism.recoprism.ml/api/recommendations/items/';

  constructor(private movieService: MovieService) { }


  public fetchSimilarMovies = (movieId: number) => {
    this.fetchSimilarMoviesFromApi(movieId);
    return this.similarMovies;
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

}

