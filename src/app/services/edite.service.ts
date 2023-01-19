import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class EditeService {
  constructor(private fs : AngularFirestore) { }
  getALLMachines(){
    return this.fs.collection("machines").valueChanges() ;
  }
}
