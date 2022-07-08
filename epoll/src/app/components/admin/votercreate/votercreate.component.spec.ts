import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotercreateComponent } from './votercreate.component';

describe('VotercreateComponent', () => {
  let component: VotercreateComponent;
  let fixture: ComponentFixture<VotercreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotercreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VotercreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
