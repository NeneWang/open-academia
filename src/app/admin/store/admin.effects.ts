import { AcademiaserviceService } from 'src/app/academia/services/academiaservice.service';
import { Injectable } from '@angular/core';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of, forkJoin } from 'rxjs';
import { AdminActions } from './admin.actions';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.local';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Course } from 'src/app/academia/models';

@Injectable()
export class AdminEffects {

    constructor(private actions$: Actions, private httpClient: HttpClient, private academiaserviceService: AcademiaserviceService) { }
    


    // Course Management
    loadCourses$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AdminActions.loadCourses),
            concatMap(() =>
                this.academiaserviceService.getCourses$().pipe(
                    map((data) => AdminActions.loadCoursesSuccess({ data })),
                    catchError((error) =>
                        of(AdminActions.loadCoursesFailure({ error }))
                    )
                )
            )
        );
    });

    createCourse$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AdminActions.createCourse),
            concatMap((action) => {
                return this.academiaserviceService.createCourse$(action.payload).pipe(
                    map((data) => AdminActions.loadCourses()),
                    catchError((error) =>
                        of(AdminActions.createCourseFailure({ error }))
                    )
                );
            })
        )
    );

    updateCourse$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AdminActions.updateCourse),
            concatMap((action) => {
                return this.academiaserviceService.updateCourse$(action.payload.id, action.payload).pipe(
                    map((data) => AdminActions.loadCourses()),
                    catchError((error) =>
                        of(AdminActions.updateCourseFailure({ error }))
                    )
                );
            })
        )
    );

    deleteCourse$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AdminActions.deleteCourse),
            concatMap((action) => {
                return this.academiaserviceService.deleteCourse$(action.id).pipe(
                    map((data) => AdminActions.loadCourses()),
                    catchError((error) =>
                        of(AdminActions.updateCourseFailure({ error }))
                    )
                );
            })
        )
    );


    // User Management

    loadUsers$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AdminActions.loadUsers),
            concatMap(() =>
                this.academiaserviceService.getUsers$().pipe(
                    map((data) => AdminActions.loadUsersSuccess({ data })),
                    catchError((error) =>
                        of(AdminActions.loadUsersFailure({ error }))
                    )
                )
            )
        );
    });

    createUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AdminActions.createUser),
            concatMap((action) => {
                return this.academiaserviceService.createUser$(action.payload).pipe(
                    map((data) => AdminActions.loadUsers()),
                    catchError((error) =>
                        of(AdminActions.createUserFailure({ error }))
                    )
                );
            })
        )
    );

    updateUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AdminActions.updateUser),
            concatMap((action) => {
                return this.academiaserviceService.updateUser$(action.payload.id, action.payload).pipe(
                    map((data) => AdminActions.loadUsers()),
                    catchError((error) =>
                        of(AdminActions.updateUserFailure({ error }))
                    )
                );
            })
        )
    );


    deleteUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AdminActions.deleteUser),
            concatMap((action) => {
                return this.academiaserviceService.deleteUser$(action.id).pipe(
                    map((data) => AdminActions.loadUsers()),
                    catchError((error) =>
                        of(AdminActions.updateUserFailure({ error }))
                    )
                );
            })
        )
    );




    

    



}
