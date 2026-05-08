import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonInput,
  IonButton
} from '@ionic/angular/standalone';

import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  standalone: true,

  imports: [
    FormsModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonItem,
    IonInput,
    IonButton
  ]

})

export class RegisterPage {

  email:string='';
  password:string='';

  constructor(
    private authService:AuthService
  ){}

  async register(){

    try {

      await this.authService.register(
        this.email,
        this.password
      );

      alert('Usuario creado');

    } catch (error) {

      alert('Error registro');

      console.log(error);

    }

  }

}