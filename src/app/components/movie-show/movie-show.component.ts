import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-show',
  templateUrl: './movie-show.component.html',
  styleUrls: ['./movie-show.component.scss']
})
export class MovieShowComponent implements OnInit {
  public id: number;

  constructor(private route: ActivatedRoute) {
    this.id = this.route.params['value'].id;
   }

  ngOnInit() {
  }

}
