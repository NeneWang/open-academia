import { CreateEnrollmentPayload } from './../enrollments/models/index';
import { UnenrollPayload, UserRole } from './../../../academia/models/index';
import { AcademiaserviceService } from 'src/app/academia/services/academiaservice.service';
import { Component } from '@angular/core';
import { Observable, filter } from 'rxjs';
import { Course, UserCourse } from 'src/app/academia/models';
import { Store } from '@ngrx/store';
import { StudentActions } from '../../store/student.actions';
import { selectEnrolledCourses, selectErolledCoursesIds } from '../../store/student.selector';

@Component({
  selector: 'app-profile-screen',
  templateUrl: './profile-screen.component.html',
  styleUrls: ['./profile-screen.component.css']
})
export class ProfileScreenComponent {

  courses$: Observable<Course[]>;
  userId: number | undefined; // Initialize as undefined
  userName: string | undefined;
  userRole: string | undefined;
  enrolledCoursesIds$: Observable<number[]> | undefined;
  userRoleFormatted: string | undefined;

  constructor(private academiaserviceService: AcademiaserviceService, private store: Store) {
    this.courses$ = this.store.select(selectEnrolledCourses);
    this.enrolledCoursesIds$ = this.store.select(selectErolledCoursesIds)
  }

  ngOnInit() {
    // Subscribe to the authUser$ observable to get the user's ID


    this.academiaserviceService.authUser$.subscribe((user) => {
      if (user) {
        this.userId = user.id;
        this.userName = user.first + ' ' + user.last;
        this.userRole = user.role;

        this.store.dispatch(StudentActions.loadEnrolledCourses({ userId: this.userId }));

        // this.academiaserviceService.getEnrolledUserCourses$(this.userId).subscribe((userCourses) => {

        // this.courses$.subscribe((courses) => {
        //   this.enrolledCoursesIds$ = courses.map((course) => course.id);
        // }
        // );
        //   console.log('this.enrolledCoursesIds', this.enrolledCoursesIds)
        // });
        // this.courses$ = this.academiaserviceService.getEnrolledCourses$(this.userId);

        console.log('this.courses$', this.courses$)
      }
    }
    )
  };


  enrollCourse(courseId: number): void {

  }

  unenrollCourse(courseId: number): void {
    if (this.userId !== undefined) {
      const createEnrollmentPayload: UnenrollPayload  = {
        courseId: courseId,
        userId: this.userId
      }
      this.store.dispatch(StudentActions.unenrollCourse({payload: createEnrollmentPayload}));
      // this.enrolledCoursesIds$ = this.enrolledCoursesIds$.filter((e) => e !== courseId);
      // this.academiaserviceService.deleteUserCourse(this.userId, courseId);
    } else {
      console.error('User ID is undefined. User not logged in.');
    }
  }


}
