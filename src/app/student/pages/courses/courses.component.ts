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
  // userCourses$: UserCourse[]
  enrolledCoursesIds: number[] = [];

  constructor(private academiaserviceService: AcademiaserviceService) {
    this.courses$ = this.academiaserviceService.getCourses$();
  
  }

  ngOnInit() {
    // Subscribe to the authUser$ observable to get the user's ID
    this.academiaserviceService.authUser$.subscribe((user) => {
      if (user) {
        // Update the userId variable with the user's ID
        this.userId = user.id;
        // Fetch the enrolledCOurses
        this.academiaserviceService.getEnrolledCourses$(this.userId).subscribe((userCourses) => {
      
          this.enrolledCoursesIds = userCourses.map((e) => e.courseId);
          console.log('this.enrolledCoursesIds', this.enrolledCoursesIds)
        });
      }
    });
  }

  enrollCourse(courseId: number): void {

    
    if (this.userId !== undefined) {
      console.log('this.enrolledCoursesIds', this.enrolledCoursesIds)
        

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


      console.log('Enroll Course ID: ', courseId, 'user id', this.userId);

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

      console.log('Payload, ', payload);

      this.academiaserviceService.createUserCourse(
        payload,
      ).subscribe((e) => {
        console.log('Enroll Course ID: ', courseId, 'user id', this.userId);
        // console.log(e)
        // this.userCourses$ = e;
        // console.log('this.userCourses$', this.userCourses$)
        return e;
      });
    } else {
      console.error('User ID is undefined. User not logged in.');
    }
  }
}
