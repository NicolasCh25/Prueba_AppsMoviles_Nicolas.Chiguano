import { Component } from '@angular/core';

import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonImg
} from '@ionic/angular/standalone';

import { CommonModule } from '@angular/common';

import { PhotoService } from 'src/app/services/photo';

@Component({
  selector:'app-camera',
  templateUrl:'./camera.page.html',
  standalone:true,

  imports:[
    CommonModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton,
    IonImg
  ]
})

export class CameraPage {

  constructor(public photoService:PhotoService){}

  async ngOnInit(){

    await this.photoService.loadPhotos();

  }

  addPhoto(){

    this.photoService.addNewPhoto();

  }

}