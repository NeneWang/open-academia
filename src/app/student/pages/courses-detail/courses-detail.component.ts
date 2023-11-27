import { AcademiaserviceService } from 'src/app/academia/services/academiaservice.service';
import { Component } from '@angular/core';
import { Section, Section_UserSection } from 'src/app/academia/models';
import { AssigmentPopupComponentComponent } from '../../components/assigment-popup-component/assigment-popup-component.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-courses-detail',
  templateUrl: './courses-detail.component.html',
  styleUrls: ['./courses-detail.component.css']
})
export class CoursesDetailComponent {

  sections: Section_UserSection[] = [
    {
      id: 1,
      courseId: 1,
      name: 'Introduction',
      description: 'This is the introduction section',
      completion_score: 100,
      order: 1,
      has_assigment: true,
      template_file_url: "https://github.com/NeneWang/mastery-cli",
      assigment_prompt: "Build Pacman",
      usersection: [
        {
          id: 1,
          courseId: 1,
          sectionId: 1,
          total_score: 100,
          is_viewed: true,
          completed_date: '11-27-2023',
          due_date: "2023-11-30"
        }
      ]
    },
    {
      id: 2,
      name: 'Introduction to Pylab',
      description: 'This is the introduction to pylab section',
      courseId: 1,
      order: 2,
      completion_score: 30,
      has_assigment: true,
      assigment_prompt: "Use Pylab to...",
      usersection: [
        {
          id: 2,
          courseId: 1,
          sectionId: 2,
          total_score: 0,
          is_viewed: false,
          completed_date: '',
          due_date: "2023-11-30"
        }
      ]
    },
    {
      id: 3,
      name: 'Introduction to Python',
      description: 'This is the introduction to python section',
      courseId: 1,
      order: 3,
      completion_score: 0,
      has_assigment: false,
      usersection: [
        {
          id: 3,
          courseId: 1,
          sectionId: 2,
          total_score: 0,
          is_viewed: false,
          completed_date: '',
          due_date: "2023-12-15"
        }
      ]
    }
  ]

  sectionToggle: { [key: number]: boolean };

  constructor(private academiaserviceService: AcademiaserviceService,
    private matDialog: MatDialog) {



    this.sectionToggle = this.sections.reduce((acc, section) => {
      acc[section.id] = false;
      return acc;
    }, {} as { [key: number]: boolean });
  }

  submitAssignment(section: Section): void {
    console.log('submit assignment')
  }

  toggleDropdown(section: Section): void {
    console.log('toggle section', section.id, this.sectionToggle[section.id])
    this.sectionToggle[section.id] = !this.sectionToggle[section.id];
  }

  openAssigmentPopup(section_usesection: Section_UserSection): void {
    this.matDialog
      .open(AssigmentPopupComponentComponent, {
        data: section_usesection
      })
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (result) {
            console.log('exit result', result)
          }
        },
      });


  }


}
