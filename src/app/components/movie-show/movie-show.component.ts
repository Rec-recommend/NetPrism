import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-show',
  templateUrl: './movie-show.component.html',
  styleUrls: ['./movie-show.component.scss']
})
export class MovieShowComponent implements OnInit {
  public id: number;
  public movie:Movie;

  constructor(private route: ActivatedRoute, private movieService:MovieService) {
    this.id = this.route.params['value'].id;
    this.movie = this.movieService.findById(this.id)
   }

  ngOnInit() {
  }

}
