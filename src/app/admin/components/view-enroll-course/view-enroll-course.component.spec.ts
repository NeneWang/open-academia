import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEnrollCourseComponent } from './view-enroll-course.component';

describe('ViewEnrollCourseComponent', () => {
  let component: ViewEnrollCourseComponent;
  let fixture: ComponentFixture<ViewEnrollCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewEnrollCourseComponent]
    });
    fixture = TestBed.createComponent(ViewEnrollCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
