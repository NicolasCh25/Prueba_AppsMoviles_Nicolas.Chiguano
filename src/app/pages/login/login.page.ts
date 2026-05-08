import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonInput,
  IonButton,
  IonToast
} from '@ionic/angular/standalone';

import { ToastController } from '@ionic/angular';

import { RouterLink } from '@angular/router';

import { AuthService } from 'src/app/services/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  standalone: true,

  imports: [
    FormsModule,
    RouterLink,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonItem,
    IonInput,
    IonButton,
    IonToast
  ]

})

export class LoginPage {

  email:string='';
  password:string='';

  constructor(
    private authService:AuthService,
    private router:Router,
    private toastController:ToastController
  ){}

  async login(){

    try {

      await this.authService.login(
        this.email,
        this.password
      );

      const toast = await this.toastController.create({

        message:'Login correcto',

        duration:2000,

        color:'success'

      });

      await toast.present();

      this.router.navigate(['/tabs']);

    } catch (error) {

      alert('Error login');

    }

  }

}