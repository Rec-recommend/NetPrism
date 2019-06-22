import { Component, OnInit, Input } from '@angular/core';
import { RecommendationService } from 'src/app/services/recommendation.service';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie-recommendation',
  templateUrl: './movie-recommendation.component.html',
  styleUrls: ['./movie-recommendation.component.scss']
})
export class MovieRecommendationComponent implements OnInit {
  @Input() movieId: number;

  public similarMovies: Movie[] = [];

  constructor(private recService: RecommendationService) {
  }

  ngOnInit() {
    this.recService
      .fetchSimilarMovies(this.movieId)
      .subscribe(
        movies => this.similarMovies = movies
      );
  }

}
