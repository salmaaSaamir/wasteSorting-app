import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MachinesService } from '../services/machines.service';
import { machin } from '../types/machin.interface';

@Component({
  selector: 'app-edite-machine',
  templateUrl: './edite-machine.component.html',
  styleUrls: ['./edite-machine.component.css']
})
export class EditeMachineComponent implements OnInit {
  machin: machin[] =[];
  name:any
  constructor(private machinSer:MachinesService) { }
  ngOnInit(): void {
  }

}
