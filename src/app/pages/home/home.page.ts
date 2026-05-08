import { Component, OnInit } from '@angular/core';

import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonSearchbar,
  IonList,
  IonItem
} from '@ionic/angular/standalone';

import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';

import { MovieService } from '../../services/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  standalone: true,

  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonSearchbar,
    IonList,
    IonItem
  ]

})

export class HomePage implements OnInit {

  movies:any[] = [];

  imageUrl = 'https://image.tmdb.org/t/p/w500';

  constructor(
    private movieService:MovieService,
    private router:Router
  ){}

  async ngOnInit(){

    this.loadMovies();

  }

  async loadMovies(){

    const data = await this.movieService.getPopularMovies();

    this.movies = data.results;

  }

  async searchMovie(event:any){

    const query = event.target.value;

    if(query.trim() == ''){

      this.loadMovies();

      return;

    }

    const data = await this.movieService.searchMovies(query);

    this.movies = data.results;

  }

  viewMovie(id:number){

    this.router.navigate(['/detail',id]);

  }

}