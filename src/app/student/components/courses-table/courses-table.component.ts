import { AcademiaserviceService } from 'src/app/academia/services/academiaservice.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Course, LoginPayload } from 'src/app/academia/models';
import { CourseEnrollmentDialogComponent } from './../course-enrollment-dialog/course-enrollment-dialog.component';
import { CourseEnrollmentDialogDetailonlyComponent } from '../../course-enrollment-dialog-detailonly/course-enrollment-dialog-detailonly.component';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-view-courses-table',
  templateUrl: './courses-table.component.html',
  styleUrls: ['./courses-table.component.css']
})
export class ViewCoursesTableComponent {
  @Input() dataSource: Course[] = [];
  @Input() enrolledCoursesIds: number[] = [];
  @Input() isLogged: boolean = false;
  @Output() enrollCourse = new EventEmitter();
  @Output() unenrollCourse = new EventEmitter();


  constructor(
    private matDialog: MatDialog,
    private academiaserviceService: AcademiaserviceService
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



    if (this.isEnrolled(course.id)) {
      this.matDialog
        .open(CourseEnrollmentDialogDetailonlyComponent, {
          data: course,
          width: "90%",

        })
        .afterClosed()
        .subscribe({
          next: (result) => {
            if (result) {
              this.enrollCourse.emit(result);
            }
          },
        });

    } else {
      this.matDialog
        .open(CourseEnrollmentDialogComponent, {
          data: course,

        })
        .afterClosed()
        .subscribe({
          next: (result) => {


            // If there is no user id, redirect to LoginPayload
            if (!this.isLogged) {
              // Redirect with RouterTestingModule
              this.academiaserviceService.redirectToLogin();
            }
            if (result) {
              this.enrollCourse.emit(result);
            }
          },
        });
    }



  }

}
