import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidate } from '../../models/candidate.model';
const baseUrl = 'https://e-poll-backend.herokuapp.com/api/candidate/';


@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  // api_link:string = 'https://e-poll-backend.herokuapp.com/';

  constructor(private http: HttpClient) { }

  getCandidates(): Observable<Candidate[]> {
        return this.http.get<Candidate[]>(baseUrl);
      }
      get(id: any): Observable<Candidate> {
        return this.http.get<Candidate>(`${baseUrl}/${id}`);
      }
      create(data: any): Observable<any> {
        return this.http.post(baseUrl, data);
      }
      update(id: any, data: any): Observable<any> {
        return this.http.put(`${baseUrl}/${id}`, data);
      }
      delete(id: any): Observable<any> {
        return this.http.delete(`${baseUrl}/${id}`);
      }
      deleteAll(): Observable<any> {
        return this.http.delete(baseUrl);
      }


  // getCandidates(){
  //   return this.http.get(this.api_link + 'api/candidate/')
  // }
}


//
// @Injectable({
//   providedIn: 'root'
// })
// export class TutorialService {
//   constructor(private http: HttpClient) { }
//   getAll(): Observable<Tutorial[]> {
//     return this.http.get<Tutorial[]>(baseUrl);
//   }
//   get(id: any): Observable<Tutorial> {
//     return this.http.get(`${baseUrl}/${id}`);
//   }
//   create(data: any): Observable<any> {
//     return this.http.post(baseUrl, data);
//   }
//   update(id: any, data: any): Observable<any> {
//     return this.http.put(`${baseUrl}/${id}`, data);
//   }
//   delete(id: any): Observable<any> {
//     return this.http.delete(`${baseUrl}/${id}`);
//   }
//   deleteAll(): Observable<any> {
//     return this.http.delete(baseUrl);
//   }
//   findByTitle(title: any): Observable<Tutorial[]> {
//     return this.http.get<Tutorial[]>(`${baseUrl}?title=${title}`);
//   }
// }
