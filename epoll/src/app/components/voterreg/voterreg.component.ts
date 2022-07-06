import { Component, OnInit } from '@angular/core';
import { VoterService } from '../../services/voter/voter.service';

@Component({
  selector: 'app-voterreg',
  templateUrl: './voterreg.component.html',
  styleUrls: ['./voterreg.component.css']
})
export class VoterregComponent implements OnInit {
  email: string='voter@gmail.com'
  password: string='kurayako'

  signupVoter(){
    this.voterservice.signupVoter({
      email: this.email,
      password: this.password
    })
  }

  constructor(private voterservice : VoterService) { }

  ngOnInit(): void {
    this.signupVoter()
  }

}
