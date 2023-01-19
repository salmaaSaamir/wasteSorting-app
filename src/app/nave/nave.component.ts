import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nave',
  templateUrl: './nave.component.html',
  styleUrls: ['./nave.component.css']
})
export class NaveComponent implements OnInit {

  constructor(private router:Router,private as :AuthService) { }

  ngOnInit(): void {
  }
  logout(){
    this.as.logOut();
    this.router.navigateByUrl('');
  }
  showMachine(){
    this.router.navigateByUrl("users");
  }
}
