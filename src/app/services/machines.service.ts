import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class MachinesService {
  constructor(public fs : AngularFirestore) { }
  getALLMachines(){
    return this.fs.collection("machines").snapshotChanges();
  }
  updateMachine(recordId:any , record:any){
      this.fs.doc("machines/" + recordId).update(record)
  }
  createMatriale(record:any){
    return this.fs.collection("matriales").add(record)
  }
  createMachine(name:any){
    return this.fs.collection("machines").add(name)
  }
  deleteMachine(id:any){
    return this.fs.doc('machines/' + id).delete()
  }
  assignMachine(recordId:any , mat:any){
    this.fs.doc("machines/" + recordId).update(mat)
  }
  getALLMatrales(){
    return this.fs.collection("matriales").snapshotChanges();
  }
}

