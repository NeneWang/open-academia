import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';
import { Course, User, UserCourse } from 'src/app/academia/models';

export const AdminActions = createActionGroup({
    source: 'admin',
    events: {
        'Load Enrollment By Id': props<{ id: number }>(),
        'Load Enrollments': emptyProps(),
        'Load Enrollments Success': props<{ data: UserCourse[] }>(),
        'Load Enrollments Failure': props<{ error: unknown }>(),
        'Load Enrollment Dialog Options Failure': props<{ error: unknown }>(),
        'Create Enrollment Failure': props<{ error: unknown }>(),
        
        // Courses Management
        'Load Courses': emptyProps(),
        'Load Courses Success': props<{ data: Course[] }>(),
        'Load Courses Failure': props<{ error: unknown }>(),
        'Create Course': props<{ payload: Course }>(),
        'Create Course Failure': props<{ error: unknown }>(),
        'Update Course': props<{ payload: Course }>(),
        'Update Course Failure': props<{ error: unknown }>(),
        'Delete Course': props<{ id: number }>(),


        // Users Management
        'Load Users': emptyProps(),
        'Load Users Success': props<{ data: User[] }>(),
        'Load Users Failure': props<{ error: unknown }>(),
        'Create User': props<{ payload: User }>(),
        'Create User Failure': props<{ error: unknown }>(),
        'Update User': props<{ payload: User }>(),
        'Update User Failure': props<{ error: unknown }>(),
        'Delete User': props<{ id: number }>(),

    }
})


