import { Component } from '@angular/core';
import { LoginService } from '../../services/login';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})

export class Login {

  loginList: any = [];

  constructor(private loginService: 
    LoginService,) { }

  getAllLogin() {
      this.loginService.getAllLoginData().subscribe((data: {}) => {
      this.loginList = data;
    });
  }
  ngOnInit() {
    this.getAllLogin();
  }


}
