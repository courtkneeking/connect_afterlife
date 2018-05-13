import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  questions: any;
  newQuestion: any;
  errors: any;
  constructor(private _httpService: HttpService, private _router: Router) {
    this.questions = [];
    this.newQuestion = {question: ''};
    this.errors = []; 
  }

  ngOnInit() {
    this.getQuestions();
  }
  getQuestions(){
    console.log('gotrestaurants')
    let obs = this._httpService.getQuestions();
    obs.subscribe(data=>{
      this.questions = data;
      console.log("faq component get questions()", this.questions)
    })
  }
  addQuestion(){
    console.log('working')
    let obs = this._httpService.addQuestion(this.newQuestion);
    obs.subscribe((data:any)=>{});
    this.getQuestions();
  }

}
