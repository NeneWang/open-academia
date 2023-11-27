import { Component } from '@angular/core';
import { Section } from 'src/app/academia/models';

@Component({
  selector: 'app-courses-detail',
  templateUrl: './courses-detail.component.html',
  styleUrls: ['./courses-detail.component.css']
})
export class CoursesDetailComponent {

  sections: Section[] = [
    {
      id: 1,
      name: 'Introduction',
      description: 'This is the introduction section',
      courseId: 1,
      order: 1,
      completion_score: 100,
    },
    {
      id: 2,
      name: 'Introduction to Pylab',
      description: 'This is the introduction to pylab section',
      courseId: 1,
      order: 2,
      completion_score: 30,
    },
    {
      id: 3,
      name: 'Introduction to Python',
      description: 'This is the introduction to python section',
      courseId: 1,
      order: 3,
      completion_score: 0,
    }
  ]

  constructor(){
    console.log('sections', this.sections)
  }

  submitAssignment(section: Section): void {
    console.log('submit assignment')
  }

  toggleDropdown(section: Section): void {
    console.log('toggle section')
  }


}
