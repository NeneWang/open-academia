import { CoursesComponent } from './../pages/courses/courses.component';
import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';
import { Course, EnrollPayload, UserCourse } from 'src/app/academia/models';


export const StudentActions = createActionGroup({
    source: 'student',
    events: {
        // Profile
        'Load Enrolled Courses': props<{userId: number}>(),
        'Load Enrolled Courses Success': props<{data: any}>(),
        'Load Enrolled Courses Failure': props<{error: unknown}>(),

        // Personal Enrollment
        'Enroll Course': props<{payload: EnrollPayload}>(),
        'Enroll Course Success': props<{data: UserCourse[]}>(),
        'Enroll Course Failure': props<{error: unknown}>(),

        'Unenroll Course': props<{payload: EnrollPayload}>(),
        'Unenroll Course Success': props<{data: EnrollPayload}>(),
        'Unenroll Course Failure': props<{error: unknown}>(),

        // Load CoursesComponent
        'Load Courses': emptyProps(),
        'Load Courses Success': props<{data: any}>(),
        'Load Courses Failure': props<{error: unknown}>(),

    }

});

