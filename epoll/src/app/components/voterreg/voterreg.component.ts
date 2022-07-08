import { Component, OnInit } from '@angular/core';
import { VoterService } from '../../services/voter/voter.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voterreg',
  templateUrl: './voterreg.component.html',
  styleUrls: ['./voterreg.component.css']
})
export class VoterregComponent implements OnInit {
  form!: FormGroup;


  // email: str
  // ing='voter@gmail.com'
  // password: string='kurayako'

  // signupVoter(){
  //   this.voterservice.signupVoter({
  //     email: this.email,
  //     password: this.password
  //   })
  // }

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    ) {

   }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: '',
      email: '',
      password: '',
    });

  }
  submit(): void{
    console.log(this.form.getRawValue());
    this.http.post('https://e-poll-backend.herokuapp.com/api/voter/register', this.form.getRawValue())
      .subscribe(res =>{
        console.log(res);
        this.router.navigate(['/voter-login']);
      });



  }

}
