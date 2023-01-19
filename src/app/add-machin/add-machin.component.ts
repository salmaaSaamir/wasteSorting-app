import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MachinesService } from '../services/machines.service';
import { machin } from '../types/machin.interface';

@Component({
  selector: 'app-add-machin',
  templateUrl: './add-machin.component.html',
  styleUrls: ['./add-machin.component.css']
})
export class AddMachinComponent implements OnInit {
  machins:machin[] = []
  machineName?:object;
  machineState?:object
  constructor(private router:Router ,private machinSer: MachinesService) { }

  ngOnInit(): void {
  }
  addMachine(name:any ,state:any){
    this.machineName = {
      name:name,
      state:state,
      matName:'',
      matCat:''
    }
    this.machinSer.createMachine(this.machineName)
    this.router.navigateByUrl('admin')
  }
}
