import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin/admin.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string='flor@gmail.com'
  password: string='florencewambui'
  signupUser(){
    this.adminservice.signupUser({
      email: this.email,
      password: this.password
    }).subscribe(data => console.log(data))

  }

  constructor(private adminservice : AdminService) { }

  ngOnInit(): void {
    this.signupUser()
  }

}
