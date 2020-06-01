import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTraineeComponent } from './new-trainee.component';

describe('NewTraineeComponent', () => {
  let component: NewTraineeComponent;
  let fixture: ComponentFixture<NewTraineeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTraineeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTraineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
