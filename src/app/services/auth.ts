import { Injectable } from '@angular/core';

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  setPersistence,
  browserLocalPersistence
} from 'firebase/auth';

import { app } from './firebase';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  auth = getAuth(app);

  constructor(){

    setPersistence(
      this.auth,
      browserLocalPersistence
    );

  }

  login(email:string,password:string){

    return signInWithEmailAndPassword(
      this.auth,
      email,
      password
    );

  }

  register(email:string,password:string){

    return createUserWithEmailAndPassword(
      this.auth,
      email,
      password
    );

  }

  logout(){

    return signOut(this.auth);

  }

}