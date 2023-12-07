import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { Course, User, UserCourse } from 'src/app/academia/models';
import { AcademiaserviceService } from 'src/app/academia/services/academiaservice.service';
import { selectCourses, selectErolledCoursesIds } from '../../store/student.selector';
import { StudentActions } from '../../store/student.actions';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Course[]>;
  enrolledCoursesIds$: Observable<number[]>;
  userId: number | undefined; // Initialize as undefined

  constructor(private academiaserviceService: AcademiaserviceService, private store: Store) {
    // this.courses$ = this.academiaserviceService.getCourses$();
    this.courses$ = this.store.select(selectCourses);
    this.enrolledCoursesIds$ = this.store.select(selectErolledCoursesIds)
  
  }

  ngOnInit() {
    // Subscribe to the authUser$ observable to get the user's ID
    this.academiaserviceService.authUser$.subscribe((user) => {
      if (user) {
        // Update the userId variable with the user's ID
        this.userId = user.id;
        // Fetch the enrolledCOurses
        // this.academiaserviceService.getEnrolledUserCourses$(this.userId).subscribe((userCourses) => {
        this.store.dispatch(StudentActions.loadEnrolledCourses({ userId: this.userId }));
        
      }
    });
  }

  isLogged(): boolean {
    return this.userId !== undefined;
  }

  enrollCourse(courseId: number): void {


    if (this.userId !== undefined) {
      this.store.dispatch(StudentActions.enrollCourse({payload: {userId: this.userId, courseId: courseId}}));
      // const payload: UserCourse = {
      //   id: new Date().getTime(),
      //   userId: this.userId,
      //   courseId: courseId,
      //   progress: 0,
      //   status: 'In Progress',
      //   grade: 0,
      //   start_date: new Date().toISOString(),
      //   expire_date: new Date().toISOString(),
      //   end_date: new Date().toISOString(),
      // };

      // console.log('Payload, ', payload);
      // this.enrolledCoursesIds.push(courseId);

      // this.academiaserviceService.createUserCourse(
      //   payload,
      // ).subscribe((e) => {
      //   return e;
      // });
    } else {
      console.error('User ID is undefined. User not logged in.');
    }
  }

  unenrollCourse(courseId: number): void {
    if (this.userId !== undefined) {
      this.store.dispatch(StudentActions.unenrollCourse({payload: {userId: this.userId, courseId: courseId}}));
      // this.enrolledCoursesIds = this.enrolledCoursesIds.filter((e) => e !== courseId);
      // this.academiaserviceService.deleteUserCourse(this.userId, courseId)
    } else {
      console.error('User ID is undefined. User not logged in.');
    }
  }
}
