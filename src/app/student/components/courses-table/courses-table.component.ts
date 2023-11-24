import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from 'src/app/academia/models';

@Component({
  selector: 'app-view-courses-table',
  templateUrl: './courses-table.component.html',
  styleUrls: ['./courses-table.component.css']
})
export class ViewCoursesTableComponent {
  @Input() dataSource: Course[] = [];
  @Output() editCourse = new EventEmitter();
  @Output() deleteCourse = new EventEmitter();
}
