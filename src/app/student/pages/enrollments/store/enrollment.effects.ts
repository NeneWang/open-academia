import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, mergeMap } from 'rxjs/operators';
import { Observable, EMPTY, of, forkJoin } from 'rxjs';
import { EnrollmentActions } from './enrollment.actions';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.local';
import { CreateEnrollmentPayload, Enrollment } from '../models';
import { Course, User, UserCourse } from 'src/app/academia/models';

@Injectable()
export class EnrollmentEffects {



  constructor(private actions$: Actions, private httpClient: HttpClient) { }
  loadEnrollments$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EnrollmentActions.loadEnrollments),

      concatMap(() =>
        this.getEnrollments().pipe(
          map((data) => EnrollmentActions.loadEnrollmentsSuccess({ data })),

          catchError((error) =>
            of(EnrollmentActions.loadEnrollmentsFailure({ error }))
          )
        )
      )
    );
  });

  loadEnrollmentDialogOptions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EnrollmentActions.loadEnrollmentDialogOptions),
      concatMap(() =>
        this.getEnrollmentDialogOptions().pipe(
          map((resp) =>
            EnrollmentActions.loadEnrollmentDialogOptionsSuccess(resp)
          ),
          catchError((err) =>
            of(
              EnrollmentActions.loadEnrollmentDialogOptionsFailure({
                error: err,
              })
            )
          )
        )
      )
    )
  );

  createEnrollment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EnrollmentActions.createEnrollment),
      concatMap((action) => {
        return this.createEnrollment(action.payload).pipe(
          map((data) => EnrollmentActions.loadEnrollments()),
          catchError((error) =>
            of(EnrollmentActions.createEnrollmentFailure({ error }))
          )
        );
      })
    )
  );

  unsubscribeEnrollment$ = createEffect(() =>
  this.actions$.pipe(
    ofType(EnrollmentActions.unsubscribeEnrollment),
    mergeMap((action: any) =>
      this.httpClient.delete<UserCourse>(
        `${environment.baseUrl}/usercourses/${action.id}`
      ).pipe(
        map(() => EnrollmentActions.unsubscribeEnrollmentSuccess({ id: action.id })),
        catchError((error) => of(EnrollmentActions.unsubscribeEnrollmentFailure({ error })))
      )
    )
  )
);

  deleteEnrollment(id: number): void {
    this.httpClient.delete<Enrollment>(
      `${environment.baseUrl}/usercourses/${id}`
    ).pipe().subscribe((e) => {});

  }

  createEnrollment(payload: CreateEnrollmentPayload): Observable<Enrollment> {
    // Calculate end date as today + 1 year
    const endDate = new Date();
    endDate.setFullYear(endDate.getFullYear() + 1);
    const newUserCourse = {
      ...payload,
      status: 'In Progress',
      grade: 0,
      start_date: new Date().toISOString(),
      expire_date: new Date().toISOString(),
      end_date: endDate.toISOString(),
    }
    return this.httpClient.post<Enrollment>(
      `${environment.baseUrl}/usercourses`,
      newUserCourse
    );
  }

  getEnrollmentDialogOptions(): Observable<{
    courses: Course[];
    students: User[];
  }> {
    return forkJoin([
      this.httpClient.get<Course[]>(`${environment.baseUrl}/courses`),
      this.httpClient.get<User[]>(`${environment.baseUrl}/users`),
    ]).pipe(
      map(([courses, students]) => {
        return {
          courses,
          students,
        };
      })
    );
  }

  getEnrollments(): Observable<Enrollment[]> {
    return this.httpClient.get<Enrollment[]>(
      `${environment.baseUrl}/usercourses?_expand=course&_expand=user`
    );
  }



}
