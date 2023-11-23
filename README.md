# OpenAcademia

In this project I am aiming to build a Open Academia System and merit based instead of time based academia.

Some Case studies are such as:

- https://www.wgu.edu/


### Ng Key Features

- [ ] Authentication
- [ ] ngrx Store Management


### Packages

```
ng add @ngrx/store
ng add @ngrx/store-devtools
```

### Image Assets


<a href="https://ibb.co/tqjHpY5"><img src="https://i.ibb.co/k4bG2qF/algorithms-1.png" alt="algorithms-1" border="0"></a>


### Prev

Understanding Modules.

First was creating all the modules.

Some common errors:

-  For some reason, is a good (better idea) to have the Mat Dialog Modul eclared on the prev module e.g. the dialog for courses creation is to be done on `admin/pages/courses.courses.module.ts`

```ts title="courses.module.ts"
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CoursesDialogComponentComponent } from '../../components/courses-dialog-component/courses-dialog-component.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { CourseTableComponent } from 'src/app/admin/components/course-table/course-table.component';


const routes: Routes = [
  
  {
    path: 'table',
    component: TableComponent,
  },
  {
    path: '',
    // component: TableComponent,
    component: IndexComponent,
  },
]


@NgModule({
  declarations: [
    IndexComponent,
    TableComponent,
    CoursesDialogComponentComponent,
    CourseTableComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    MatDialogModule,
  ],
  exports: [RouterModule]
})
export class CoursesModule { }

```

### 2.1 Creating Course Tables


```ts title="course-table-component.ts"
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from 'src/app/academia/models';

@Component({
  selector: 'app-courses-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.css'],
})
export class CourseTableComponent {
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

  displayedColumns = ['id', 'name'];
}

```

```ts title="course-table-component.html"
<table mat-table [dataSource]="dataSource" class="mat-elevation-z8">
    <!--- Note that these columns can be defined in any order.
          The actual rendered columns are set as a property on the row definition" -->
  
    <!-- Id Column -->
    <ng-container matColumnDef="id">
      <th mat-header-cell *matHeaderCellDef>#</th>
  
      <td mat-cell *matCellDef="let course">
        {{ course.id }}
      </td>
    </ng-container>
  
    <!-- Name  Column -->
    <ng-container matColumnDef="name">
      <th mat-header-cell *matHeaderCellDef>Nombre</th>
  
      <td mat-cell *matCellDef="let course">
        {{ course.name }}
      </td>
    </ng-container>
  
  
    <!-- Actions Column -->
    <ng-container matColumnDef="actions">
      <th mat-header-cell *matHeaderCellDef>Acciones</th>
  
      <td mat-cell *matCellDef="let course">
        <button [routerLink]="course.id" mat-icon-button color="accent">
          <mat-icon>visibility</mat-icon>
        </button>
  
        <button
          (click)="deleteCourse.emit(course.id)"
          mat-icon-button
          color="warn"
        >
          <mat-icon>delete</mat-icon>
        </button>
  
        <button
          (click)="editCourse.emit(course.id)"
          mat-icon-button
          color="primary"
        >
          <mat-icon>edit</mat-icon>
        </button>
      </td>
    </ng-container>
  
    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
  </table>
  

```

### Get Courses

Syncing the courses

```html title="table.component.html"
<p>table Courses</p>
<br>


<app-courses-table
[dataSource]="(courses$ | async) || []"
></app-courses-table>

<button (click)="addCourse()" >Create Course</button>

```


```ts title="academiaservice.service.ts"

getCourses$(): Observable<Course[]> {
// return of(this.courses);
return this.httpClient.get<Course[]>(`${environment.baseUrl}/course`);

}

```

### Posting Courses


The following code works.

```js
    return this.httpClient
      .post<User>(`${environment.baseUrl}/users`, payload)
      .pipe(concatMap(() => this.getUsers()));

```


![](./img/2023-11-23-13-55-35.png)

### Deleting

```js
deleteUser(id: number): Observable<User[]> {
    return this.httpClient
      .delete<Object>(`${environment.baseUrl}/users/${id}`)
      .pipe(
        // map(() =>  this.getUsers())
        concatMap(() => this.getUsers())
      );
  }
  ```

  Updated the service:

  ```js
  

  updateCourse(id: number, course: Course){
    return this.httpClient.put<Course[]>(`${environment.baseUrl}/course/${id}`, course).
      pipe(concatMap(() => this.getCourses$()));;
  }

  deleteCourse$(id: number): Observable<Course[]> {
    return this.httpClient.delete<Course[]>(`${environment.baseUrl}/course/${id}`)
      .pipe(concatMap(() => this.getCourses$()));
  }

  getCourseById$(id: number): Observable<Course | undefined> {
    return this.httpClient.get<Course[]>(`${environment.baseUrl}/course/${id}`)
      .pipe(concatMap((courses) => of(courses[0])));
  }
  ```

