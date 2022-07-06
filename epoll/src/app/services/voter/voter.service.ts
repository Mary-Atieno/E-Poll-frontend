import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoterService {
  private voterurl = "https://e-poll-backend.herokuapp.com/api/voter/register";
  constructor() { }
}
