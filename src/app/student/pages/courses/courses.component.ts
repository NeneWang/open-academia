import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'src/app/academia/models';
import { AcademiaserviceService } from 'src/app/academia/services/academiaservice.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  courses$: Observable<Course[]>;

  constructor(private academiaserviceService: AcademiaserviceService) {
    this.courses$ = this.academiaserviceService.getCourses$()
  }

  enroll(course_id: number): void {
    // this.courses$ = this.academiaserviceService.enrollCourse$(id);
  }

}
