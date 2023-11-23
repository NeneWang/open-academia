import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from 'src/app/academia/models';

@Component({
  selector: 'app-courses-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.css'],
})
export class CourseTableComponent {
  @Input()
  dataSource: Course[] = [];

  @Output()
  editCourse = new EventEmitter();

  @Output()
  deleteCourse = new EventEmitter();

  displayedColumns = ['Id', 'Name', 'Description', 'Category', 'Intensity'];
  
}
