import { createFeature, createReducer, on } from '@ngrx/store';
import { EnrollmentActions } from './enrollment.actions';
import { Enrollment } from '../models';
import { Course, User } from 'src/app/academia/models';

export const enrollmentFeatureKey = 'enrollment';

export interface State {
  isLoading: boolean;
  isLoadingDialogOptions: boolean;
  courseOptions: Course[];
  userOptions: User[];
  enrollments: Enrollment[];
  error: unknown;
}

export const initialState: State = {
  isLoading: false,
  isLoadingDialogOptions: false,
  enrollments: [],
  courseOptions: [],
  userOptions: [],
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(EnrollmentActions.loadEnrollments, (state) => ({
    ...state,
    isLoading: true,
  })),

  on(EnrollmentActions.loadEnrollmentsSuccess, (state, { data }) => ({
    ...state,
    isLoading: false,
    enrollments: data,
  })),

  on(EnrollmentActions.loadEnrollmentsFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),
  on(EnrollmentActions.loadEnrollmentDialogOptions, (state) => {
    return {
      ...state,
      isLoadingDialogOptions: true,
    };
  }),
  
  on(EnrollmentActions.loadEnrollmentDialogOptionsSuccess, (state, action) => ({
    ...state,
    courseOptions: action.courses,
    userOptions: action.students,
    isLoadingDialogOptions: false,
  })),

  on(EnrollmentActions.loadEnrollmentDialogOptionsFailure, (state, action) => ({
    ...state,
    error: action.error,
    isLoadingDialogOptions: false,
  })),
  on(EnrollmentActions.unsubscribeEnrollmentSuccess, (state, { id }) => {
    return {
      ...state,
      enrollments: state.enrollments.filter(enrollment => enrollment.id !== id)
    };
  }),

);

export const enrollmentFeature = createFeature({
  name: enrollmentFeatureKey,
  reducer,
});
