import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginForm } from 'src/app/types/Auth';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form:LoginForm = {
    email: '',
    password: '',
    name: '',
    number:''
  };
  errorMessage:string = "";
  i:number = 1;
  disaple:boolean = false;
  constructor(private authService: AuthService , private router:Router) {}
  ngOnInit(): void {}
  onClick(){
    this.router.navigateByUrl('register');
  }
  login(form:any){
    let data = form.value;
    this.authService.signIn(data.email,data.password).then(result => {
      this.errorMessage = ""
      if(!(result.additionalUserInfo?.isNewUser)){
        if(data.password == "admin123"){
          this.router.navigateByUrl("admin")
        }else{
          this.router.navigateByUrl('users');
        }
      } else{
        this.router.navigateByUrl('register');
      }
    }).catch(err => {
      this.errorMessage = "invalid email or password";
      if(this.i>3){
        this.disaple = true;
      }
      setTimeout(() => {
        this.disaple = false ;
        this.i = 2;
      }, 10000);
    })
  }
  increamentCounter(){
    this.i++;
  }
}

