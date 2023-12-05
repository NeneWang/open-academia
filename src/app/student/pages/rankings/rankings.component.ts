import { AcademiaserviceService } from 'src/app/academia/services/academiaservice.service';
import { Component } from '@angular/core';
import { UserAverage } from 'src/app/academia/models';


@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css']
})
export class RankingsComponent {
  rankings: UserAverage[] | undefined;

  constructor(private academiaserviceService: AcademiaserviceService) { 
    this.academiaserviceService.getRanking$().subscribe(
      (ranking: any) => {
        this.rankings = ranking;
      }
    )
  }

  onRowClick(ranking: UserAverage) {
    console.log(ranking); // Replace with your logic
  }


}
