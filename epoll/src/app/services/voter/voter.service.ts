import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoterService {
  private voterurl = "https://e-poll-backend.herokuapp.com/api/voter/register";
  constructor(private http: HttpClient) { }

  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  
  signupVoter(user:any):Observable<any>{
    return this.http.post(this.voterurl, user)

  }
}
