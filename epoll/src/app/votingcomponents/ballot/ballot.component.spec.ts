import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BallotComponent } from './ballot.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('BallotComponent', () => {
  let component: BallotComponent;
  let fixture: ComponentFixture<BallotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BallotComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(BallotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

