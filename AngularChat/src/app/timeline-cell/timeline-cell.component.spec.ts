import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineCellComponent } from './timeline-cell.component';

describe('TimelineCellComponent', () => {
  let component: TimelineCellComponent;
  let fixture: ComponentFixture<TimelineCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
