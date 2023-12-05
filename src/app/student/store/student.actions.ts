import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';

export const studentActions = createActionGroup({
    source: 'student',
    events: {
        'Load Enrolled Courses': props<{userId: number}>(),
    }

});

