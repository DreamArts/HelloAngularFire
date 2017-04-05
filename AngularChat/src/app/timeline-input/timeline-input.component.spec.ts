import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineInputComponent } from './timeline-input.component';

describe('TimelineInputComponent', () => {
  let component: TimelineInputComponent;
  let fixture: ComponentFixture<TimelineInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
