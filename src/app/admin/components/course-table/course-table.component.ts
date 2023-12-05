import { AcademiaserviceService } from 'src/app/academia/services/academiaservice.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course, User } from 'src/app/academia/models';

@Component({
  selector: 'app-courses-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.css'],
})
export class CourseTableComponent {


  selectedCourse: Course | undefined;
  enrolledUsers: User[] = [];

  constructor(private academiaserviceService: AcademiaserviceService) {

  }

  @Input()
  dataSource: Course[] = [{
    "id": 1,
    "name": "Algorithms I",
    "description": "This course is an introduction to the design and analysis of algorithms. Topics include asymptotic notation, recurrences and recursion, analysis of algorithms, sorting algorithms, basic data structures, and graph algorithms.",
    "image": "https://i.ibb.co/k4bG2qF/algorithms-1.png",
    "category": "Computer Science",
    "intensity": "High",
    "credits": 4
},];

  @Output()
  editCourse = new EventEmitter();

  @Output()
  deleteCourse = new EventEmitter();


  unenrollUser(userId: number): void {
    console.log('unenrollUser', userId)
    this.academiaserviceService.deleteUserCourse(userId, this.selectedCourse!.id);
    this.enrolledUsers = this.enrolledUsers.filter((u) => u.id !== userId);
  }

  isAnyEnrolledUser(): boolean {
    return this.enrolledUsers.length > 0;
  }

  viewCourseSections(course: Course): void {
    console.log('viewCourseSections', course)
    this.selectedCourse = course;
    this.academiaserviceService.getEnrolledUsers$(course.id).subscribe(
      (user: any) => {
        this.enrolledUsers = user;
        console.log('selected user', user)
      }
    )
    
  }

  reset(){
    this.selectedCourse = undefined;
    this.enrolledUsers = [];
  }

  displayedColumns = [ 'name', 'actions'];
}
