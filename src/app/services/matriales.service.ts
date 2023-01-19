import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class MatrialesService {

  constructor(private fs : AngularFirestore) { }
  getALLMachines(){
    return this.fs.collection("matriales").valueChanges() ;
  }
}
