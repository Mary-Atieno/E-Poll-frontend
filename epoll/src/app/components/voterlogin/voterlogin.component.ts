import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-voterlogin',
  templateUrl: './voterlogin.component.html',
  styleUrls: ['./voterlogin.component.css']
})
export class VoterloginComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email:'',
      password:'',

    });
  }

    submit():void{
      this.http.post('https://e-poll-backend.herokuapp.com/api/login/', this.form.getRawValue(),{
        withCredentials: true
      })
        .subscribe(() => this.router.navigate(['/voter-home']));

    }

}
