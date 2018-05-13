import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) {}
    getQuestions(){
      return this._http.get('/api/questions')
    }
    addQuestion(newQuestion){
      return this._http.post('/api/questions', newQuestion)
    }
    registerUser(newUser){
      return this._http.post('/api/register', newUser)
    }
    ///////
    loginUser(user){
      return this._http.post('/api/login', user)
    }
    /////////

}
