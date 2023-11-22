import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AcademiaserviceService } from 'src/app/academia/services/academiaservice.service';
import { CoursesDialogComponentComponent } from 'src/app/admin/components/courses-dialog-component/courses-dialog-component.component';

import {Course} from 'src/app/academia/models';



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
    this.courses$ = this.academiaserviceService.getCourses$();
  }

  addCourse():void{
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
              image: result.image,
              category: result.category,
              intensity: result.intensity,
              credits: result.credits,
            });
          }
        },
      });
  }



}
