import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LoginForm, RegisterForm } from '../types/Auth';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private fsAuth: AngularFireAuth) {}

  register(form:RegisterForm) {
    const auth = getAuth();
    return  createUserWithEmailAndPassword(auth, form.email, form.password);

  }
  logIn(){

  }
  logOut(){

  }
}
