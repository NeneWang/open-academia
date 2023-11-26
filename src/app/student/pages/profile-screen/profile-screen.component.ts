import { AcademiaserviceService } from 'src/app/academia/services/academiaservice.service';
import { Component } from '@angular/core';
import { Observable, filter } from 'rxjs';
import { Course, UserCourse } from 'src/app/academia/models';

@Component({
  selector: 'app-profile-screen',
  templateUrl: './profile-screen.component.html',
  styleUrls: ['./profile-screen.component.css']
})
export class ProfileScreenComponent {

  courses$: Observable<Course[]>;
  userId: number | undefined; // Initialize as undefined
  enrolledCoursesIds: number[] = [];

  constructor(private academiaserviceService: AcademiaserviceService) {
    this.courses$ = new Observable<Course[]>();
  }

  ngOnInit() {
    // Subscribe to the authUser$ observable to get the user's ID
    
    
    this.academiaserviceService.authUser$.subscribe((user) => {
      if (user) {
        this.userId = user.id;

        this.academiaserviceService.getEnrolledUserCourses$(this.userId).subscribe((userCourses) => {

          this.enrolledCoursesIds = userCourses.map((e) => e.courseId);
          console.log('this.enrolledCoursesIds', this.enrolledCoursesIds)
        });
        this.courses$ = this.academiaserviceService.getEnrolledCourses$(this.userId);
      }
    }
    )
  };

  
  enrollCourse(courseId: number): void {


    if (this.userId !== undefined) {
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
      this.enrolledCoursesIds.push(courseId);

      this.academiaserviceService.createUserCourse(
        payload,
      ).subscribe((e) => {
        return e;
      });
    } else {
      console.error('User ID is undefined. User not logged in.');
    }
  }

  unenrollCourse(courseId: number): void {
    if (this.userId !== undefined) {
      this.enrolledCoursesIds = this.enrolledCoursesIds.filter((e) => e !== courseId);
      this.academiaserviceService.deleteUserCourse(this.userId, courseId);
    } else {
      console.error('User ID is undefined. User not logged in.');
    }
  }


}
