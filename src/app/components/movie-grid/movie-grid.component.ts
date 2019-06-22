import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie-grid',
  templateUrl: './movie-grid.component.html',
  styleUrls: ['./movie-grid.component.scss']
})
export class MovieGridComponent implements OnInit {

  public movies:Movie[];
  
  constructor(private movieService:MovieService) { }

  ngOnInit() {
    this.movies = this.movieService.head();
  }

}
