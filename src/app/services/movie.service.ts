import { Injectable } from '@angular/core';
import { moviesHash } from '../mocks/moviesHash';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  // returns the first 10 elements of the Hashed Movies
  public head():Movie[]{
    return Object.values(moviesHash).slice(0,500);
  }
  
  public find(ids: number[]) {
    let movies: Movie[] = [];
    try {
      ids.forEach((id)=> movies.push(moviesHash[id]))
    } catch(e){
      console.log(e)
    }
    return movies
  }
}
