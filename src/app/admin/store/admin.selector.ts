import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAdmin from './admin.reducer';

export const selectAdminState = createFeatureSelector<any>(fromAdmin.adminFeatureKey);

export const selectAdminIsLoading = createSelector(
    selectAdminState,
    (state) => state.isLoading
);

// Courses Management
export const selectCourses = createSelector(
    selectAdminState,
    (state) => state.courses
);



// Students Management
export const selectStudents = createSelector(
    selectAdminState,
    (state) => state.students
);

