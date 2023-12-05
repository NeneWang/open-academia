import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';
import { UserCourse } from 'src/app/academia/models';

export const adminActions = createActionGroup({
    source: 'Enrollment',
    events: {
        'Load Enrollment By Id': props<{ id: number }>(),
        'Load Enrollments': emptyProps(),
        'Load Enrollments Success': props<{ data: UserCourse[] }>(),
        'Load Enrollments Failure': props<{ error: unknown }>(),
        'Load Enrollment Dialog Options Failure': props<{ error: unknown }>(),
        'Create Enrollment Failure': props<{ error: unknown }>(),
    }
})


