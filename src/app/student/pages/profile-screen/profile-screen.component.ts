import { AcademiaserviceService } from 'src/app/academia/services/academiaservice.service';
import { Component } from '@angular/core';
import { Observable, filter } from 'rxjs';
import { Course } from 'src/app/academia/models';

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
    this.courses$ = this.academiaserviceService.getCourses$();
  }

  ngOnInit() {
    // Subscribe to the authUser$ observable to get the user's ID
    this.academiaserviceService.authUser$.subscribe((user) => {
      if (user) {
        this.userId = user.id;
        this.courses$ = this.academiaserviceService.getEnrolledCourses$(this.userId);
      }
    }
    )
  };


}
