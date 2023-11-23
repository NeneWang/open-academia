import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, tap } from 'rxjs';
import { AcademiaserviceService } from 'src/app/academia/services/academiaservice.service';
import { CoursesDialogComponentComponent } from 'src/app/admin/components/courses-dialog-component/courses-dialog-component.component';

import { Course } from 'src/app/academia/models';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  courses$: Observable<Course[]>;
  constructor(
    private academiaserviceService: AcademiaserviceService,
    private matDialog: MatDialog
  ) {
    this.courses$ = this.academiaserviceService.getCourses$()

  }

  addCourse(): void {
    this.matDialog
      .open(CoursesDialogComponentComponent)
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (result) {
            this.courses$ = this.academiaserviceService.createCourse$({
              id: new Date().getTime(),
              name: result.name,
              description: result.description,
              image: "",
              category: result.category,
              intensity: result.intensity,
              credits: result.credits,
            });
          }
        },
      });
  }

  deleteCourse(id: number): void {
    this.courses$ = this.academiaserviceService.deleteCourse$(id);
  }

  editCourse(course: Course): void {
    console.log('course id', course)
    this.matDialog
      .open(CoursesDialogComponentComponent, {
        data: course,
      })
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (result) {
            this.courses$ = this.academiaserviceService.updateCourse$(
              course.id, {
              id: course.id,
              name: result.name,
              description: result.description,
              image: "",
              category: result.category,
              intensity: result.intensity,
              credits: result.credits,

            }
            )
          }
        },
      });
  }


}
