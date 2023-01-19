import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {
  constructor(private router:Router,private as :AuthService) { }
  ngOnInit(): void {
  }
  logout(){
    this.as.logOut();
    this.router.navigateByUrl('');
  }
  adminHomne(){
    this.router.navigateByUrl('admin');
  }
}
