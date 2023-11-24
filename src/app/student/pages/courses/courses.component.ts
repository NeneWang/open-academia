import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'src/app/academia/models';
import { AcademiaserviceService } from 'src/app/academia/services/academiaservice.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Course[]>;
  user_id: number | undefined; // Initialize as undefined

  constructor(private academiaserviceService: AcademiaserviceService) {
    this.courses$ = this.academiaserviceService.getCourses$();
  }

  ngOnInit() {
    // Subscribe to the authUser$ observable to get the user's ID
    this.academiaserviceService.authUser$.subscribe((user) => {
      if (user) {
        // Update the user_id variable with the user's ID
        this.user_id = user.id;
      }
    });
  }

  enrollCourse(course_id: number): void {
    if (this.user_id !== undefined) {
      this.academiaserviceService.enrollCourse$(course_id, this.user_id);
    } else {
      console.error('User ID is undefined. User not logged in.');
      // Handle the case where the user is not logged in.
    }
  }
}
