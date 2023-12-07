import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { Course, User, UserCourse } from 'src/app/academia/models';
import { AcademiaserviceService } from 'src/app/academia/services/academiaservice.service';
import { selectCourses, selectErolledCoursesIds, selectIsLoading } from '../../store/student.selector';
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
  isLoading$: Observable<boolean> | undefined;

  constructor(private academiaserviceService: AcademiaserviceService, private store: Store) {
    // this.courses$ = this.academiaserviceService.getCourses$();
    this.courses$ = this.store.select(selectCourses);
    this.isLoading$ = this.store.select(selectIsLoading);
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
  
    } else {
      console.error('User ID is undefined. User not logged in.');
    }
  }

  unenrollCourse(courseId: number): void {
    if (this.userId !== undefined) {
      this.store.dispatch(StudentActions.unenrollCourse({payload: {userId: this.userId, courseId: courseId}}));
    } else {
      console.error('User ID is undefined. User not logged in.');
    }
  }
}
