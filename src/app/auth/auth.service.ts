import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private fs: AngularFirestore) {}
  getUser(){
    return this.fs.collection('users').valueChanges();
  }
}
