import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromStudent from './student.reducer';

export const selectStudentState =
    createFeatureSelector<fromStudent.State>(fromStudent.studentFeatureKey);

export const selectEnrolledCourses = createSelector(
    selectStudentState,
    (state) => state.enrolledCourses
);

export const selectErolledCoursesIds = createSelector(
    selectStudentState,
    (state) => state.enrolledCoursesIds
);

export const selectIsLoading = createSelector(
    selectStudentState,
    (state) => state.isLoading
);

export const selectCourses = createSelector(
    selectStudentState,
    (state) => state.courses
);

export const selectUserRankings = createSelector(
    selectStudentState,
    (state) => state.userRankings
);


