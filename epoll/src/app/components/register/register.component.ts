import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin/admin.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;



  // email: string='flor@gmail.com'
  // password: string='florencewambui'
  // signupUser(){
  //   this.adminservice.signupUser({
  //     email: this.email,
  //     password: this.password
  //   }).subscribe(data => console.log(data))

  // }

  // constructor(private adminservice : AdminService) { }
  constructor(private formBuiler: FormBuilder,
     private http: HttpClient,
     private router: Router,
     ) { 

     }

  ngOnInit(): void {
    this.form = this.formBuiler.group({
      name: '',
      email: '',
      password: ''

    });
    
  }
  // ngOnInit(): void {
  //   // this.signupUser()
  // }

  submit():void{
    console.log(this.form.getRawValue());
    this.http.post('https://e-poll-backend.herokuapp.com/api/admin/register', this.form.getRawValue())
      .subscribe(() => this.router.navigate(['/admin-login']));
      

  }

}
