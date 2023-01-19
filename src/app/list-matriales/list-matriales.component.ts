import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MachinesService } from '../services/machines.service';
import { MatrialesService } from '../services/matriales.service';
import { machin } from '../types/machin.interface';

@Component({
  selector: 'app-list-matriales',
  templateUrl: './list-matriales.component.html',
  styleUrls: ['./list-matriales.component.css']
})
export class ListMatrialesComponent implements OnInit {
  machins :machin[]=[]
  matrialeName:Array<string> = [];

  recycle:number = 0;
  nonRecycle:number = 0;
  result:any;
  constructor(private matrialeSer: MatrialesService,private router:Router ,private machinSer: MachinesService) {}
  ngOnInit(): void {
    this.machinSer.getALLMachines().subscribe(data => {
      this.machins = data.map(e => {
        return {
          id:e.payload.doc.id,
          ...(e.payload.doc.data() as Record<string, unknown>)
        }
      })
    })
  }

  calc(data:any){
    let matriales = ['plastic','carton','cardboard','paper','aluminum','steel']
    for(let i= 0 ;i<(data.matCat).split(',').length;i++){
      if((data.matCat).split(',')[i] == "rec"){
        this.recycle++;
      }else{
        this.nonRecycle++
      }
    }
      this.result = "recycle== " + this.recycle +" || nonRecycle ==  "+ this.nonRecycle
      this.recycle = 0;this.nonRecycle = 0;
      return this.result
  }
}
