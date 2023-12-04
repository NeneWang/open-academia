import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Course } from 'src/app/academia/models';

@Component({
  selector: 'app-course-enrollment-dialog-detailonly',
  templateUrl: './course-enrollment-dialog-detailonly.component.html',
  styleUrls: ['./course-enrollment-dialog-detailonly.component.css']
})
export class CourseEnrollmentDialogDetailonlyComponent {

  course: Course;
  constructor(
    private MatDialogRef: MatDialogRef<CourseEnrollmentDialogDetailonlyComponent>,
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
