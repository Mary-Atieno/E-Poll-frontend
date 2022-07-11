import { Component, Input, OnInit } from '@angular/core';
import { CandidateService } from 'src/app/services/candidate/candidate.service';
import { Candidate } from '../../../models/candidate.model';
import { Position } from '../../../models/position.model';

@Component({
  selector: 'app-newcandidate',
  templateUrl: './newcandidate.component.html',
  styleUrls: ['./newcandidate.component.css']
})
export class NewcandidateComponent implements OnInit {

  @Input() position!: Position;
  candidate: Candidate = {
    id: 0,
    fullname: '',
    image: '',
    bio: '',
  };
  submitted = false;
  constructor(private candidateService: CandidateService) { }

  ngOnInit(): void {
  }

  saveCandidate(): void {
    const date = {
      fullname: this.candidate.fullname,
      image: this.candidate.image,
      bio: this.candidate.bio
    };
    this.candidateService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }
  newCandidate(): void {
    this.submitted = false;
    this.candidate = {
      id: 0,
      fullname: '',
      image: '',
      bio: ''

    };
  }
}






function data(data: any) {
  throw new Error('Function not implemented.');
}

