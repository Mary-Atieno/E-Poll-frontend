import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BallotPositionComponent } from './ballot-position.component';

describe('BallotPositionComponent', () => {
  let component: BallotPositionComponent;
  let fixture: ComponentFixture<BallotPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BallotPositionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BallotPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
