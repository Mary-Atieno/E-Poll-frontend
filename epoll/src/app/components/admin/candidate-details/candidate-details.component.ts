import { Component, Input, OnInit } from '@angular/core';
import { Candidate } from '../../../models/candidate.model';
import { Position } from '../../../models/position.model';
import { CandidateService } from '../../../services/candidate/candidate.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.css']
})
export class CandidateDetailsComponent implements OnInit {
  @Input() viewMode = false;
  @Input() currentCandidate: Candidate = {
    id: '',
    fullname: '',
    image: '',
    bio: '',

  };
  message = '';
  constructor(
    private candidateService: CandidateService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getCandidate(this.route.snapshot.params["id"]);
    }
  }
  getCandidate(id: string): void {
    this.candidateService.get(id)
      .subscribe({
        next: (data) => {
          this.currentCandidate = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  updatePublished(status: boolean): void {
    const data = {
      fullname: this.currentCandidate.fullname,
      bio: this.currentCandidate.bio,
      image: this.currentCandidate.image,
      published:status
    };
    this.message = '';
    this.candidateService.update(this.currentCandidate.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'The status was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }
  updateCandidate(): void {
    this.message = '';
    this.candidateService.update(this.currentCandidate.id, this.currentCandidate)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This candidate was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }
  deleteCandidate(): void {
    this.candidateService.delete(this.currentCandidate.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/candidates']);
        },
        error: (e) => console.error(e)
      });
  }

}
