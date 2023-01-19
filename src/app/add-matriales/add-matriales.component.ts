import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MachinesService } from '../services/machines.service';
import { machin } from '../types/machin.interface';

@Component({
  selector: 'app-add-matriales',
  templateUrl: './add-matriales.component.html',
  styleUrls: ['./add-matriales.component.css']
})
export class AddMatrialesComponent implements OnInit {
  machins:machin[] = []
  matrialeName?:object;
  constructor(private router:Router ,private machinSer: MachinesService) {}
  ngOnInit(): void {
  }
  addMatriale(name:any){
    this.matrialeName = {
      name:name,
    }
    this.machinSer.createMatriale(this.matrialeName)
    this.router.navigateByUrl('users')
  }
}
