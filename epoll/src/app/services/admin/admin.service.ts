import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, shareReplay } from 'rxjs/operators';
import * as jwtDecode from 'jwt-decode';
import * as moment from 'moment';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseurl = "https://e-poll-backend.herokuapp.com";
  private adminloginurl = "https://e-poll-backend.herokuapp.com/api/admin/register";
  private adminhomeurl = "https://e-poll-backend.herokuapp.com/admin";
  private positionurl = "https://e-poll-backend.herokuapp.com/api/position/";
  private candidateurl ="https://e-poll-backend.herokuapp.com/api/candidate/";
  private voterurl = "https://e-poll-backend.herokuapp.com/api/voter/";
  private votesurl ="https://e-poll-backend.herokuapp.com/api/votes/";
  adminurl: any;


  constructor(private http: HttpClient) { }

  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  signupUser(user:any):Observable<any>{
    return this.http.post(this.adminloginurl, user)

  }




}

// "position": "https://e-poll-backend.herokuapp.com/api/position/",
// "candidate": "https://e-poll-backend.herokuapp.com/api/candidate/",
// "voter": "https://e-poll-backend.herokuapp.com/api/voter/",
// // "votes": "https://e-poll-backend.herokuapp.com/api/votes/"
