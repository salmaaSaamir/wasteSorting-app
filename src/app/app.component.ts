import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { AuthService } from './auth/auth.service';
import { AngularFireDatabase , AngularFireList } from '@angular/fire/compat/database';
import { firebaseConfig } from './firebase.config';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    initializeApp(firebaseConfig);
  }

}
