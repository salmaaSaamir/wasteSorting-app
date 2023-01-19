import { Component, OnInit } from '@angular/core';
import { MachinesService } from '../services/machines.service';
import { machin } from '../types/machin.interface';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';

import { Observable } from 'rxjs';
import { ChildActivationStart, Router } from '@angular/router';
import { APP_CHECK_NAMESPACE_SYMBOL } from '@angular/fire/app-check/app-check.module';
import { AuthService } from '../services/auth.service';
import { MatrialesService } from '../services/matriales.service';
import { AssignMatrialesComponent } from '../assign-matriales/assign-matriales.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  machins: machin[] = [];
  machinName:machin["machinName"];
  disable: boolean = false;
  hiden: boolean = false;
  editeState?:boolean;
  record?:object;
  modalHiddden:boolean = false;
  itemToEdit?:any;
  mat?:object;
  matriale?:any;
  machineName?:object;
  matrialeRecord?:object;
  matrialeCategory?:Array<any>;
  NewmatrialeName?:object;
  selected: boolean = false;
  formModal:any;
  machines:any;
  constructor(private machinSer: MachinesService, private router: Router ,private as :AuthService) {}
  ngOnInit(): void {
    this.machinSer.getALLMachines().subscribe(data => {
      this.machins = data.map(e => {
        return {
          id:e.payload.doc.id,
          ...(e.payload.doc.data() as Record<string, unknown>),
        }
      })
    })
  }
  editeMachine(machinData:any,state:any) {
    this.record = {
      state:machinData.state,
    }
    this.machinSer.updateMachine(machinData.id , this.record)
  }


  listMatrial() {
    this.router.navigateByUrl('list');
  }


  addMatrial() {
    this.router.navigateByUrl('add');
  }
  disapled(state?: any) {
    if (state == 'on') {
      this.disable = false;
    } else {
      this.disable = true;
    }
    return this.disable;
  }
  setHidden() {
    this.hiden = !this.hiden;
  }
  saveAssign(MachinData:any){
    console.log(MachinData)
    this.router.navigateByUrl('assign')
  }
  assign(machine:any){

    this.router.navigateByUrl("assign?name="+machine.name+"&&matName="+machine.matName+"&&matCat="+machine.matCat+"&&id="+machine.id)
  }
  assignMachineName(){
    return this.machinName ;
  }

}
