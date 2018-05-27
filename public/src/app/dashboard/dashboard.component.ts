import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: any;
  constructor(private _httpService: HttpService, private _router: Router) { 
    this.user = {email: ''}
  }

  ngOnInit() {
    this.getUser();
  }
  getUser(){
    let obs = this._httpService.getUser(this.user);
    console.log("dashboard comonnnetn")
    obs.subscribe((data:any)=>{
      this.user = data;
    });
  }
}
