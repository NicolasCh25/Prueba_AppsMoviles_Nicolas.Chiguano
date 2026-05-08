import { Component, OnInit } from '@angular/core';

import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonModal
} from '@ionic/angular/standalone';

import { ActivatedRoute } from '@angular/router';

import { CommonModule } from '@angular/common';

import { MovieService } from '../../services/movie';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  standalone:true,

  imports:[
    CommonModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonModal
  ]
})

export class DetailPage implements OnInit {

  movie:any;

  imageUrl = 'https://image.tmdb.org/t/p/w500';

  constructor(
    private route:ActivatedRoute,
    private movieService:MovieService
  ){}

  async ngOnInit(){

    const id = this.route.snapshot.params['id'];

    this.movie = await this.movieService.getMovieDetail(id);

  }

}