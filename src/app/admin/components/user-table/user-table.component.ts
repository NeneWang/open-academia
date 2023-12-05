import { AcademiaserviceService } from 'src/app/academia/services/academiaservice.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course, User, UserCourse } from 'src/app/academia/models';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent {

  selectedUser: User | undefined;
  userCourses: Course[] = [];

  constructor(
    private academiaserviceService: AcademiaserviceService,
  ) {

  }

  @Input()
  dataSource: User[] = [];

  @Output()
  editUser = new EventEmitter();

  @Output()
  deleteUser = new EventEmitter();

  viewUserDialog(user: User): void {
    // this.editUser.emit(user);
    this.selectedUser = user;
    // Call to get enrolled courses
    this.academiaserviceService.getEnrolledCourses$(user.id).subscribe(
      (userCourse: any) => {
        this.userCourses = userCourse;
        console.log('selected userCourse', userCourse)
      }
    )
  }

  isThereEnrolledCourses(): boolean {
    return this.userCourses.length > 0;
  }

  unenrollCourse(courseId: number): void {
    console.log('unenrollCourse', courseId)
    this.academiaserviceService.deleteUserCourse(this.selectedUser!.id, courseId);
    this.userCourses = this.userCourses.filter((c) => c.id !== courseId);
  }

  reset(): void {
    this.selectedUser = undefined;
    this.userCourses = [];
  }

  displayedColumns = ['first', 'last', 'email', 'role', 'actions'];
}

