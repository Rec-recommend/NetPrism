import { Component, OnInit } from '@angular/core';
import { RecommendationService } from 'src/app/services/recommendation.service';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie-recommendation',
  templateUrl: './movie-recommendation.component.html',
  styleUrls: ['./movie-recommendation.component.scss']
})
export class MovieRecommendationComponent implements OnInit {
  public similarMovies: Movie[] = [];
  constructor(recService: RecommendationService) {

    recService.fetchSimilarMovies(1).subscribe(movies => this.similarMovies = movies);
  }

  ngOnInit() {
  }

}
