import { Component, OnInit } from '@angular/core';
import { CandidateService } from 'src/app/services/candidate/candidate.service';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
