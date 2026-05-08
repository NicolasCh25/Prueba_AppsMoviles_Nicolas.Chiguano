import { Component, OnInit } from '@angular/core';

import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonCard,
  IonCardContent,
  IonAvatar,
  IonButton
} from '@ionic/angular/standalone';

import { CommonModule } from '@angular/common';

import {
  getAuth,
  onAuthStateChanged,
  signOut
} from 'firebase/auth';

import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  standalone: true,

  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonCard,
    IonCardContent,
    IonAvatar,
    IonButton
  ]
})

export class ProfilePage implements OnInit {

  user: any = null;

  constructor(private router: Router) {}

  ngOnInit() {

    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {

      if (user) {

        this.user = user;

      } else {

        this.router.navigate(['/login']);

      }

    });

  }

  async logout() {

    const auth = getAuth();

    await signOut(auth);

    this.router.navigate(['/login']);

  }

}