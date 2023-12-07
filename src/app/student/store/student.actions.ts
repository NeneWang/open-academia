import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';
import { UnenrollPayload } from 'src/app/academia/models';


export const StudentActions = createActionGroup({
    source: 'student',
    events: {
        // Profile
        'Load Enrolled Courses': props<{userId: number}>(),
        'Load Enrolled Courses Success': props<{data: any}>(),
        'Load Enrolled Courses Failure': props<{error: unknown}>(),

        // Personal Enrollment
        'Enroll Course': props<{payload: any}>(),
        'Enroll Course Success': props<{data: any}>(),
        'Enroll Course Failure': props<{error: unknown}>(),

        'Unenroll Course': props<{payload: UnenrollPayload}>(),
        'Unenroll Course Success': props<{data: UnenrollPayload}>(),
        'Unenroll Course Failure': props<{error: unknown}>(),

    }

});

