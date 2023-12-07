import { AcademiaserviceService } from 'src/app/academia/services/academiaservice.service';
import { Component } from '@angular/core';
import { Course, UserAverage } from 'src/app/academia/models';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectIsLoading, selectUserRankings } from '../../store/student.selector';


@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css']
})
export class RankingsComponent {
  rankings: Observable<UserAverage[]>;
  selectedUser: UserAverage | undefined;
  userCourses: Course[] = [];
  isLoading$: Observable<boolean> | undefined;

  constructor(private store: Store, private academiaserviceService: AcademiaserviceService) { 
    
    this.rankings = this.store.select(selectUserRankings);
    this.isLoading$ = this.store.select(selectIsLoading);
  }

  onRowClick(ranking: UserAverage) {
    console.log(ranking); // Replace with your logic
    this.selectedUser = ranking;
    // Call to get enrolled courses
    this.academiaserviceService.getEnrolledCourses$(ranking.id).subscribe(
      (userCourse: any) => {
        this.userCourses = userCourse;
      }
    )
  }

  reset(): void {
    this.selectedUser = undefined;
    this.userCourses = [];
  }


}
