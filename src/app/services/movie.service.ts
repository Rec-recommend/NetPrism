import { Injectable } from '@angular/core';
import { moviesHash } from '../mocks/moviesHash';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  // returns the first 10 elements of the Hashed Movies
  public head(max:number = 10 ):Movie[]{
    return Object.values(moviesHash).slice(0,max);
  }
  
  public findById(id: number):Movie{
    return moviesHash[id];
  }
  public find(ids: number[], max: number = 6) {
    let movies: Movie[] = [];
    try {
      ids.forEach((id)=> movies.push(moviesHash[id]))
    } catch(e){
      console.log(e)
    }
    return movies.slice(0, max)
  }
}
