import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course, User, UserCourse } from 'src/app/academia/models';
import { AcademiaserviceService } from 'src/app/academia/services/academiaservice.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Course[]>;
  userId: number | undefined; // Initialize as undefined
  userCourses: Observable<UserCourse[]> | undefined;

  constructor(private academiaserviceService: AcademiaserviceService) {
    this.courses$ = this.academiaserviceService.getCourses$();
  }

  ngOnInit() {
    // Subscribe to the authUser$ observable to get the user's ID
    this.academiaserviceService.authUser$.subscribe((user) => {
      if (user) {
        // Update the userId variable with the user's ID
        this.userId = user.id;
      }
    });
  }

  enrollCourse(courseId: number): void {


    if (this.userId !== undefined) {


      /**
       * 
        userId: number;
        courseId: number;
        progress: number;
        status: UserCourseStatus;
        grade: number;
        start_date: string;
        expire_date: string;
        end_date: string;
       */


      const payload: UserCourse = {
        id: new Date().getTime(),
        userId: this.userId,
        courseId: courseId,
        progress: 0,
        status: 'In Progress',
        grade: 0,
        start_date: new Date().toISOString(),
        expire_date: new Date().toISOString(),
        end_date: new Date().toISOString(),
      };


      this.academiaserviceService.createUserCourse(
        payload,
      );
    } else {
      console.error('User ID is undefined. User not logged in.');
    }
  }
}
