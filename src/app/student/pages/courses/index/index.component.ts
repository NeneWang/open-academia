import { AcademiaserviceService } from 'src/app/academia/services/academiaservice.service';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Course } from 'src/app/academia/models';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  
  courses$: Observable<Course[]>;
  
  constructor(
    private academiaserviceService: AcademiaserviceService,
    private matDialog: MatDialog
  ){
    this.courses$ = this.academiaserviceService.getCourses$()
  }
}
