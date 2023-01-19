import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterDataService } from 'src/app/services/RegisterDataService.service';
import { LoginForm, RegisterForm } from 'src/app/types/Auth';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form:RegisterForm = {
    email: '',
    password: '',
    name: '',
    phoneNumber: ''
  };

errorMessage:string = "";
  constructor(private router:Router , private as :AuthService,private us:RegisterDataService) {

  }

  ngOnInit(): void {}

  onClickLogin(){
    this.router.navigateByUrl('');
  }
  onClickNewLogin(){
    alert("now you have an account go back and sign in with it ");
    this.router.navigateByUrl('');
  }

  signUp(form:any){
    let data:LoginForm= form.value;
    this.as.signUp(data.email,data.password)
    .then(result => {
      this.errorMessage = ""
      this.us.addNewUser(result.user?.uid, data.name , data.number).then(() =>this.router.navigateByUrl('') )
    }
    )
    .catch(err => this.errorMessage ="the email is already used try another one || invalid data " )
  }
}

