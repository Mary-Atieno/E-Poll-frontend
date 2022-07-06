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
  private positionurl = "https://e-poll-backend.herokuapp.com/api/position/";
  private candidateurl ="https://e-poll-backend.herokuapp.com/api/candidate/";
  private voterurl = "https://e-poll-backend.herokuapp.com/api/voter/";
  private votesurl ="https://e-poll-backend.herokuapp.com/api/votes/";
  adminurl: any;
  // private votesurl ="https://e-poll-backend.herokuapp.com/api/votes/";

  constructor(private http: HttpClient) { }

  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  
  signupUser(user:any):Observable<any>{
    return this.http.post(this.adminloginurl, user)

  }



//   private setSession(authResult:any) {
//     const token = authResult.access;
//     const payload = <jwt.JwtPayload> jwtDecode(token);
//     const expiresAt = moment.unix(payload.exp);
//     if (payload.role == "admin"){
//       console.log("PAYLOAD")
//       console.log(payload)
//       localStorage.setItem('token', authResult.access);
//       localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
//     }
//     console.log("PAYLOAD")
//     console.log(payload)
//     console.log("Token")
//     console.log(token)
//     // console.log("Before SetItem")
//     localStorage.setItem('token', token);
//     // console.log("After SetItem")
//     // localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
    
//   }
//   get token(): string {
//     return localStorage.getItem('token');
//   }
//   adminLogin(email: string, password: string) {
//     return this.http.post(
//       this.adminloginurl,
//       { email, password }
//     ).pipe(
//       tap(response => this.setSession(response)),
//       shareReplay(),
//     );
//   }
//   adminLogout() {
//     localStorage.removeItem('token');
//     localStorage.removeItem('expires_at');
//   }
//   refreshToken() {
//     if (moment().isBetween(this.getExpiration().subtract(1, 'days'), this.getExpiration())) {
//       return this.http.post(
//         this.refreshtokenurl,
//         { refresh: this.token }
//       ).pipe(
//         tap(response => this.setSession(response)),
//         shareReplay(),
//       ).subscribe();
//     }
//   }
//   refreshtokenurl(refreshtokenurl: any, arg1: { refresh: string; }) {
//     throw new Error('Method not implemented.');
//   }
//   getExpiration() {
//     const expiration = localStorage.getItem('expires_at');
//     const expiresAt = JSON.parse(expiration);
//     return moment(expiresAt);
//   }
//   adminLoggedIn() {
//     return moment().isBefore(this.getExpiration());
//   }
//   adminLoggedOut() {
//     return !this.adminLoggedIn();
//   }
//   getAllCandidates(): Observable<any>{
//     return this.http.get(this.candidateurl,
//     {headers: this.httpHeaders})
//   }
//   getAllVoters(): Observable<any>{
//     return this.http.get(this.voterurl,
//     {headers: this.httpHeaders})
//   }
//   RegisterCandidate(candidate: any): Observable<any>{
//     return this.http.post<any>(this.candidateurl, candidate, {headers: this.httpHeaders});
//   }
//   RegisterVoter(voter: any): Observable<any>{
//     return this.http.post<any>(this.voterurl, voter, {headers: this.httpHeaders});
//   }

//   getAdmin(id: any): Observable<any>{
//     return this.http.get(this.adminurl + id + "/",
//     {headers: this.httpHeaders})
//   }
// }
// @Injectable()
// export class AdminAuthInterceptor implements HttpInterceptor {
//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     const token = localStorage.getItem('token');
//     if (token) {
//       const cloned = req.clone({
//         headers: req.headers.set('Authorization', 'Bearer '.concat(token))
//       });
//       return next.handle(cloned);
//     } else {
//       return next.handle(req);
//     }
//   }
// }
// @Injectable()
// export class AdminAuthGuard implements CanActivate {
//   constructor(private adminService: AdminService, private router: Router) { }
//   canActivate() {
//     if (this.adminService.adminLoggedIn()) {
//       // this.adminService.refreshToken();
//       return true;
//     } else {
//       this.adminService.adminLogout();
//       this.router.navigate(['/login']);
//       // this.router.navigate(['login']);
//       return false;
//     }
//   }
// }
// interface JWTPayload {
//   user_id: number;
//   email: string;
//   exp: number;
//   role: string;
//   token_type: string;
//   jti: string;
//   bio: string;
//   phone: string;

}

// "position": "https://e-poll-backend.herokuapp.com/api/position/",
// "candidate": "https://e-poll-backend.herokuapp.com/api/candidate/",
// "voter": "https://e-poll-backend.herokuapp.com/api/voter/",
// // "votes": "https://e-poll-backend.herokuapp.com/api/votes/"