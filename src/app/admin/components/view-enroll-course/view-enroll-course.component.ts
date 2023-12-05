import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Course } from 'src/app/academia/models';

@Component({
  selector: 'app-view-enroll-course',
  templateUrl: './view-enroll-course.component.html',
  styleUrls: ['./view-enroll-course.component.css']
})
export class ViewEnrollCourseComponent {
  @Input() dataSource: Course[] = [];
  @Input() enrolledCoursesIds: number[] = [];
  @Input() isLogged: boolean = false;
  @Output() enrollCourse = new EventEmitter();
  @Output() unenrollCourse = new EventEmitter();


  constructor(
    private matDialog: MatDialog,
  ) {

  }



  isEnrolled = (courseId: number) => {
    const isEnrolled = this.enrolledCoursesIds.some((e) => e === courseId);
    return isEnrolled;
  }

  isEnrollable = (courseId: number) => {

    // Is enrollable if it is logeable and not enrolled
    const isEnrollable = !this.isEnrolled(courseId);
    return isEnrollable && this.isLogged;
  }


  openEnrollDialog(course: Course): void {




  }

}
