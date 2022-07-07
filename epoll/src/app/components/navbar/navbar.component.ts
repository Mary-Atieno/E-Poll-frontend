import { Component, OnInit } from '@angular/core';
import { Emitters } from '../../emitters/emitters';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Emitters.authEmitter.subscribe(
      (auth: boolean) =>{

      }
     )
  }

}
