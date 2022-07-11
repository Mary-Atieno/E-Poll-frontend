import { HttpClient } from '@angular/common/http';
import { EmitterVisitorContext } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Emitters } from '../../../emitters/emitters';

@Component({
  selector: 'app-voterhome',
  templateUrl: './voterhome.component.html',
  styleUrls: ['./voterhome.component.css']
})
export class VoterhomeComponent implements OnInit {
  message = '';
  authenticated: boolean = false;

  handleUpdateResponse: any;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get('https://e-poll-backend.herokuapp.com/api/voter/',{withCredentials: true})
      .subscribe({

        next: (res:any) =>{
          this.message = 'Hi ${res.name}';
          Emitters.authEmitter.emit(true);
          Emitters.authEmitter.subscribe((auth:boolean)=>{
            this.authenticated = auth;
          });
        },
        error : (err:any) =>{
          this.message = 'You are not logged in';
          Emitters.authEmitter.emit(false)
        }
      });

  }

  logout(): void{
    this.http.post('https://e-poll-backend.herokuapp.com/api/api-auth/logout/', {}, {withCredentials: true})
      .subscribe( () =>this.authenticated = false);


  }

}
