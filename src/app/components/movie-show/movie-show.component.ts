import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';
import { RecommendationService } from '../../services/recommendation.service';

@Component({
  selector: 'app-movie-show',
  templateUrl: './movie-show.component.html',
  styleUrls: ['./movie-show.component.scss']
})
export class MovieShowComponent implements OnInit {
  public movie:Movie;

  constructor(private route: ActivatedRoute, 
    private movieService:MovieService,
    private recService:RecommendationService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(routeParams => {
      let id = routeParams.id;
      this.movie = this.movieService.findById(id)
      this.recService.fetchSimilarMovies(this.movie.id);
    });
  
  }

}
