import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { User, LoginPayload, Course, UserCourse } from 'src/app/academia/models';
import { selectAuthUser } from 'src/app/academia/store/coursemanagement.selector';
import { AuthActions } from 'src/app/academia/store/coursemanagement.actions';
import { environment } from 'src/environments/environment.local';
import { Observable, concatMap, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AcademiaserviceService {


  courses: Course[] = [{
    "id": 1,
    "name": "Algorithms I",
    "description": "This course is an introduction to the design and analysis of algorithms. Topics include asymptotic notation, recurrences and recursion, analysis of algorithms, sorting algorithms, basic data structures, and graph algorithms.",
    "image": "https://i.ibb.co/k4bG2qF/algorithms-1.png",
    "category": "Computer Science",
    "intensity": "High",
    "credits": 4
  }]


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
    // return of(this.courses);
    return this.httpClient.get<Course[]>(`${environment.baseUrl}/course`);

  }

  createCourse$(payload: Course): Observable<Course[]> {
    // this.courses.push(payload);
    return this.httpClient.post<Course[]>(`${environment.baseUrl}/course`, payload).
      pipe(concatMap(() => this.getCourses$()));;
  }

  updateCourse$(id: number, course: Course) {
    return this.httpClient.put<Course[]>(`${environment.baseUrl}/course/${id}`, course).
      pipe(concatMap(() => this.getCourses$()));;
  }

  deleteCourse$(id: number): Observable<Course[]> {
    return this.httpClient.delete<Course[]>(`${environment.baseUrl}/course/${id}`)
      .pipe(concatMap(() => this.getCourses$()));
  }


  getCourseById$(id: number): Observable<Course | undefined> {
    return of(this.courses.find((c) => c.id === id));
  }

  // ======== User Management ========

  getUsers$(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${environment.baseUrl}/user`);
  }

  createUser$(payload: User): Observable<User[]> {
    return this.httpClient.post<User[]>(`${environment.baseUrl}/user`, payload).
      pipe(concatMap(() => this.getUsers$()));;
  }

  updateUser$(id: number, user: User): Observable<User[]> {
    return this.httpClient.put<User[]>(`${environment.baseUrl}/user/${id}`, user).
      pipe(concatMap(() => this.getUsers$()));;
  }

  deleteUser$(id: number): Observable<User[]> {
    return this.httpClient.delete<User[]>(`${environment.baseUrl}/user/${id}`)
      .pipe(concatMap(() => this.getUsers$()));
  }


  //  ======== Enrollment Management ========
  enrollCourse$(id_course: number, id_user: number): Observable<UserCourse[]> {
    // return of(this.courses);
    
    const get_today_date = () => {
      const today = new Date();
      const dd = String(today.getDate()).padStart(2, '0');
      const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      const yyyy = today.getFullYear();

      return yyyy + '-' + mm + '-' + dd;
    }

    const get_in_5_months_date = () => {
      const today = new Date();
      const dd = String(today.getDate()).padStart(2, '0');
      const mm = String(today.getMonth() + 6).padStart(2, '0'); //January is 0!
      const yyyy = today.getFullYear();

      return yyyy + '-' + mm + '-' + dd;
    }

    const DATE_TODAY = get_today_date();
    const DATE_IN_5_MONTHS = get_in_5_months_date();

    return this.httpClient.post<UserCourse[]>(`${environment.baseUrl}/usercourse`, {
      id: new Date().getTime(),
      user_id: id_user,
      course_id: id_course,
      progress: 0,
      status: "In Progress",
      grade: 0,
      start_date: DATE_TODAY,
      expire_date: DATE_IN_5_MONTHS,
      end_date: "-"
    });
    
  }


}
