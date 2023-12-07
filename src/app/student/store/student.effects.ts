import { AcademiaserviceService } from 'src/app/academia/services/academiaservice.service';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Observable, catchError, concatMap, map, mergeMap, of } from "rxjs";
import { StudentActions } from "./student.actions";
import { Course, UnenrollPayload } from 'src/app/academia/models';
import { CreateEnrollmentPayload } from '../pages/enrollments/models';


@Injectable()
export class StudentEffects {
    constructor(private actions$: Actions, private httpClient: HttpClient,
        private academiaserviceService: AcademiaserviceService) {

    }

    loadEnrolledCourses$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(StudentActions.loadEnrolledCourses),
            concatMap((action) => {
                return this.getEnrolledCourses(action.userId).pipe(
                    map((data) => StudentActions.loadEnrolledCoursesSuccess({ data })),
                    catchError((error) => of(StudentActions.loadEnrolledCoursesFailure({ error })))
                )
            })
        )
    });

    getEnrolledCourses(user_id: number): Observable<Course[]> {
        return this.academiaserviceService.getEnrolledCourses$(user_id);
    }

    unenrollCourse$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(StudentActions.unenrollCourse),
            concatMap((action) => {
                this.academiaserviceService.deleteUserCourse(action.payload.userId, action.payload.courseId);
                const payload: UnenrollPayload = {
                    userId: action.payload.userId,
                    courseId: action.payload.courseId
                }
                return of(StudentActions.unenrollCourseSuccess({ data: payload }));
            })
        )

    });

    unenrollCourse(id_user: number, id_course: number) {
        this.academiaserviceService.deleteUserCourse(id_user, id_course);
    }

}


