import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromStudent from './student.reducer';

export const selectStudentState =
  createFeatureSelector<fromStudent.State>(fromStudent.studentFeatureKey);

export const selectEnrolledCourses = createSelector(
    selectStudentState,
    (state) => state.enrolledCourses
    );

export const selectErolledCoursesIds = createSelector(
    selectEnrolledCourses,
    (courses) => courses.map((course) => course.id)
    );

export const selectIsLoading = createSelector(
    selectStudentState,
    (state) => state.isLoading
    );



