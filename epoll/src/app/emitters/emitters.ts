import { EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Emitters{
    static authEmitter = new EventEmitter<boolean>();
}

// @Component({
//   selector: 'app-voterhome',
//   templateUrl: '',
//   styleUrls: ['./voterhome.component.css']
// })
// export class VoterhomeComponent implements OnInit {
//   message = '';

//   handleUpdateResponse: any;

//   constructor(
//     private http: HttpClient
//   ) { }

//   ngOnInit(): void {
//     this.http.get('https://e-poll-backend.herokuapp.com/api/voter/',{withCredentials: true})
//       .subscribe({

//         next: (res:any) =>{
//           this.message = 'Hi ${res.name}';
//           Emitters.authEmitter.emit(true);
//         },
//         error : (err:any) =>{
//           this.message = 'You are not logged in';
//           Emitters.authEmitter.emit(false)
//         }
//       });

//   }

// }
