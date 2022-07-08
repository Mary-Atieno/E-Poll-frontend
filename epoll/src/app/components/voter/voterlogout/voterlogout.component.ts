import { Component, OnInit } from '@angular/core';
import { Emitters } from '../../../emitters/emitters'

@Component({
  selector: 'app-voterlogout',
  templateUrl: './voterlogout.component.html',
  styleUrls: ['./voterlogout.component.css']
})
export class VoterlogoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Emitters.authEmitter.subscribe(
      (auth: boolean) => {

      }
    );
  }

}
