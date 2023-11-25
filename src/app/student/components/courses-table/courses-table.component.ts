import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from 'src/app/academia/models';

@Component({
  selector: 'app-view-courses-table',
  templateUrl: './courses-table.component.html',
  styleUrls: ['./courses-table.component.css']
})
export class ViewCoursesTableComponent {
  @Input() dataSource: Course[] = [];
  @Input() enrolledCoursesIds: number[] = [];
  @Output() enrollCourse = new EventEmitter();
  // @Output() editCourse = new EventEmitter();
  // @Output() deleteCourse = new EventEmitter();

  isEnrolled = (courseId: number) => {
    const isEnrolled = this.enrolledCoursesIds.some((e) => e === courseId);
    return isEnrolled;
  }
}
