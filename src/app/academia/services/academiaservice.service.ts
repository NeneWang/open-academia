import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { User, LoginPayload, Course } from 'src/app/academia/models';
import { selectAuthUser } from 'src/app/academia/store/coursemanagement.selector';
import { AuthActions } from 'src/app/academia/store/coursemanagement.actions';
import { environment } from 'src/environments/environment.local';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AcademiaserviceService {

  courses: Course[] = []


  public authUser$ = this.store.select(selectAuthUser);
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private store: Store
  ) { }


  private handleAuthUser(authUser: User): void {
    // this._authUser$.next(authUser);
    this.store.dispatch(AuthActions.setAuthUser({ data: authUser }));
    localStorage.setItem('token', authUser.token);
  }

  login(payload: LoginPayload): void {
    // const headers = new HttpHeaders({
    //   token: localStorage.getItem('token') || 'NO HAY TOKEN',
    // });
    this.httpClient
      .get<User[]>(
        `${environment.baseUrl}/user?email=${payload.email}&password=${payload.password}`
      )
      .subscribe({
        next: (response) => {
          const authUser = response[0];

          if (!authUser) {
            alert('Usuario o contrasena invalidos');
          } else {
            this.handleAuthUser(authUser);

            // this.router.navigate(['/dashboard/home']);
          }
        },
        error: (err) => {
          alert('Error de conexion');
        },
      });
  }

  // ======== Course Management ======== 

  getCourses$(): Observable<Course[]> {
    return of(this.courses);
  }

  createCourse$(payload: Course): Observable<Course[]> {
    this.courses.push(payload);
    return of([...this.courses]);
  }

  editCourse$(id: number, payload: Course): Observable<Course[]> {
    return of(
      this.courses.map((c) => (c.id === id ? { ...c, ...payload } : c))
    );
  }

  deleteCourse$(id: number): Observable<Course[]> {
    this.courses = this.courses.filter((c) => c.id !== id);
    return of(this.courses);
  }

  getCourseById$(id: number): Observable<Course | undefined> {
    return of(this.courses.find((c) => c.id === id));
  }


}
