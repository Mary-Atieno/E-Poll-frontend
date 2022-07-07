import { TestBed } from '@angular/core/testing';

import { VoterdashService } from './voterdash.service';

describe('VoterdashService', () => {
  let service: VoterdashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoterdashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
