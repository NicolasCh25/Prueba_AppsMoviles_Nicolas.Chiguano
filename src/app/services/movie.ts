import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  apiKey = 'f1c7d0e8f21b3735b3c5a07d52e6cfb5';

  url = 'https://api.themoviedb.org/3';

  async getPopularMovies(){

    const response = await fetch(

      `${this.url}/movie/popular?api_key=${this.apiKey}&language=es-ES`

    );

    return await response.json();

  }
  async searchMovies(query:string){

  const response = await fetch(

    `${this.url}/search/movie?api_key=${this.apiKey}&language=es-ES&query=${query}`

  );

  return await response.json();

}
async getMovieDetail(id:number){

  const response = await fetch(

    `${this.url}/movie/${id}?api_key=${this.apiKey}&language=es-ES`

  );

  return await response.json();

}

}