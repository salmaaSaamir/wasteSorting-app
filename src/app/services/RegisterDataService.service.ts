import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class RegisterDataService {

  constructor( private fs:AngularFirestore) { }
  addNewUser(id:any,name:string , phoneNumber:string){
    return this.fs.doc('users/'+ id).set({
      name,
      phoneNumber
    })

  }
}
