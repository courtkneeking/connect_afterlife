import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  newUser: any;
  user: any;
  errors: any;
  constructor(private _httpService: HttpService, private _router: Router) {
    this.newUser = {name: '', email: '', password: ''};
    this.user = {email: '', password: ''}
    this.errors = []; 
  }

  ngOnInit() {
  }
  registerUser(){
    let obs = this._httpService.registerUser(this.newUser);
    obs.subscribe((data:any)=>{});
  }
  loginUser(){
    let obs = this._httpService.loginUser(this.user);
    obs.subscribe((data:any)=>{
      this.user = data;
      this._router.navigate(['/dashboard']);
    });
  }
}

