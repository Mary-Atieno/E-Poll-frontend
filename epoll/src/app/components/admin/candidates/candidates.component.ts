import { Component, Input, OnInit } from '@angular/core';
import { CandidateService } from 'src/app/services/candidate/candidate.service';
import { Candidate } from '../../../models/candidate.model';
import { Position } from '../../../models/position.model';


@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {
  @Input() position!: Position;
  candidates?: Candidate[];
  currentCandidate: Candidate = {
    id: 0,
    fullname: '',
    image: '',
    bio: '',
  
  };
  currentIndex = -1;
  fullname = '';
  constructor(private candidateService: CandidateService) { }
  ngOnInit(): void {
    this.retrieveCandidates();
  }
  retrieveCandidates(): void {
    this.candidateService.getCandidates()
      .subscribe({
        next: (data) => {
          this.candidates = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  refreshList(): void {
    this.retrieveCandidates();

    this.currentCandidate = {
      id: 0,
      fullname: '',
      image: '',
      bio: ''
      // position?:
    };
    this.currentIndex = -1;
  }
  setActiveCandidate(candidate: Candidate, index: number): void {
    this.currentCandidate = candidate;
    this.currentIndex = index;
  }
  removeAllCandidates(): void {
    this.candidateService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }
}





