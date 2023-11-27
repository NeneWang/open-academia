import { Component, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Course } from 'src/app/academia/models';

@Component({
  selector: 'app-course-enrollment-dialog',
  templateUrl: './course-enrollment-dialog.component.html',
  styleUrls: ['./course-enrollment-dialog.component.css']
})
export class CourseEnrollmentDialogComponent {

  course: Course;
  constructor(
    private MatDialogRef: MatDialogRef<CourseEnrollmentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private courseData: Course
  ) {

    if (courseData) {
      this.course = courseData;
    } else {
      this.course = {
        id: 0,
        name: '',
        description: '',
        image: '',
        category: '',
        intensity: '',
        credits: 0,
      };
    }

  }

  enrollCourse(): void {
    this.MatDialogRef.close(this.course.id);
  }


}
