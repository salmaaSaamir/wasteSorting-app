import { Component, importProvidersFrom, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MachinesService } from '../services/machines.service';
import { matriale } from '../types/matriale.interface';

@Component({
  selector: 'app-assign-matriales',
  templateUrl: './assign-matriales.component.html',
  styleUrls: ['./assign-matriales.component.css']
})
export class AssignMatrialesComponent implements OnInit {
  matriales :matriale[] = []
  machinData?:any
  disaple:boolean = false ;
  matrialeName?:any
  test:Array<string> = [];
  matrialeArray?:Array<any>
  finalMat?:object
  constructor(private route:ActivatedRoute , private machineSer:MachinesService,private router:Router) { }
  ngOnInit(): void {
    this.route.queryParams.subscribe(data =>{
      return this.machinData = data;
    })
    this.machineSer.getALLMatrales().subscribe(data => {
      this.matriales = data.map(e => {
        return {
          name:e.payload.doc.id,
          ...(e.payload.doc.data() as Record<string, unknown>),
        }
      })
    })
  }
  options(){
    return this.disaple = !this.disaple
  }






  assignMatrial(mat:string){
    this.matrialeArray = ['plastic','carton','cardboard','paper','aluminum','steel']
    if(this.matrialeArray.includes(mat)){
        this.finalMat={
          matName:this.machinData['matName'].concat("," +mat),
          matCat:this.machinData['matCat'].concat(",rec")
        }
      }else{
        this.finalMat={
          matName:this.machinData['matName'].concat("," +mat),
          matCat:this.machinData['matCat'].concat(",non")
        }
      }
    setTimeout(() =>{
      this.machineSer.assignMachine(this.machinData['id'],this.finalMat)
    },3000)
    this.router.navigateByUrl("users")
  }
  matrialePage(){
    this.router.navigateByUrl("add")
  }
}
