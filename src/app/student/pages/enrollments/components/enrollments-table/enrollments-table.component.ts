import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Enrollment } from '../../models';
import {
  selectEnrollments,
  selectEnrollmentsIsLoading,
} from '../../store/enrollment.selectors';
import { AcademiaserviceService } from 'src/app/academia/services/academiaservice.service';
import { EnrollmentActions } from '../../store/enrollment.actions';

@Component({
  selector: 'app-enrollments-table',
  templateUrl: './enrollments-table.component.html',
  styleUrls: ['./enrollments-table.component.css'],
})
export class EnrollmentsTableComponent {
  displayedColumns = ['course', 'user'];

  enrollments$: Observable<Enrollment[]>;
  isLoading$: Observable<boolean>;
  isAdmin: boolean = false;

  constructor(private store: Store, private academiaserviceService: AcademiaserviceService) {
    this.enrollments$ = this.store.select(selectEnrollments);
    this.isLoading$ = this.store.select(selectEnrollmentsIsLoading);
    this.academiaserviceService.authUser$.pipe().subscribe(
      (user) => {
        if (user) {
          
          // Add actions if logged as admin
          if (user.role === 'ADMIN') {
            this.displayedColumns.push('actions');
            this.isAdmin = true;
          }
        }
      }
    )
  }

  deleteEnrollment(enrollment: Enrollment) {
    
    console.log('delete enrollment', enrollment);
    this.store.dispatch(EnrollmentActions.unsubscribeEnrollment({ id: enrollment.id }));

  }

}
