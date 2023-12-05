import { AcademiaserviceService } from 'src/app/academia/services/academiaservice.service';
import { Component } from '@angular/core';
import { Course, UserAverage } from 'src/app/academia/models';


@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css']
})
export class RankingsComponent {
  rankings: UserAverage[] | undefined;
  selectedUser: UserAverage | undefined;
  userCourses: Course[] = [];

  constructor(private academiaserviceService: AcademiaserviceService) { 
    this.academiaserviceService.getRanking$().subscribe(
      (ranking: any) => {
        this.rankings = ranking;
      }
    )
  }

  onRowClick(ranking: UserAverage) {
    console.log(ranking); // Replace with your logic
    this.selectedUser = ranking;
    // Call to get enrolled courses
    this.academiaserviceService.getEnrolledCourses$(ranking.id).subscribe(
      (userCourse: any) => {
        this.userCourses = userCourse;
        console.log('selected userCourse', userCourse)
      }
    )
  }

  reset(): void {
    this.selectedUser = undefined;
    this.userCourses = [];
  }


}
