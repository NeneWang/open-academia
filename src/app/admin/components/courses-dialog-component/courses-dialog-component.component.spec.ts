import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesDialogComponentComponent } from './courses-dialog-component.component';

describe('CoursesDialogComponentComponent', () => {
  let component: CoursesDialogComponentComponent;
  let fixture: ComponentFixture<CoursesDialogComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesDialogComponentComponent]
    });
    fixture = TestBed.createComponent(CoursesDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
