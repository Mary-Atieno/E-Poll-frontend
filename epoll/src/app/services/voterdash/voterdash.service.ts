import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VoterdashService {

  constructor(private http: HttpClient) { }
}


// @Injectable({
//   providedIn: 'root'
// })
// export class VoterService {
//   private voterurl = "https://e-poll-backend.herokuapp.com/api/voter/register";
//   constructor(private http: HttpClient) { }

//   httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  
//   signupVoter(user:any):Observable<any>{
//     return this.http.post(this.voterurl, user)

//   }
// }
