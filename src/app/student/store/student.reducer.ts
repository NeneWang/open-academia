import { Enrollment } from './../pages/enrollments/models/index';

import { createFeature, createReducer, on } from '@ngrx/store';
import { StudentActions } from './student.actions';
import { Course } from 'src/app/academia/models';


export const studentFeatureKey = 'student'
export interface State {
    isLoading: boolean;
    isLoadingDialogOptions: boolean;
    error: unknown;
    enrolledCourses: Course[];
}

export const initialState: State = {
    isLoading: false,
    isLoadingDialogOptions: false,
    error: null,
    enrolledCourses: [],
}

export const studentReducer = createReducer(
    initialState,
    on(StudentActions.loadEnrolledCourses, (state) => ({
        ...state,
        isLoading: true,
    })),
    on(StudentActions.loadEnrolledCoursesSuccess, (state, { data }) => ({
        ...state,
        isLoading: false,
        enrolledCourses: data,
    })),
    on(StudentActions.loadEnrolledCoursesFailure, (state, { error }) => ({
        ...state,
        isLoading: false,
        error,
    })),
    // Personal Enrollment
    on(StudentActions.enrollCourse, (state) => ({
        ...state,
        isLoading: true,
    })),
    on(StudentActions.enrollCourseSuccess, (state, { data }) => ({
        ...state,
        isLoading: false,
        enrolledCourses: [...state.enrolledCourses, data],
    })),
    on(StudentActions.enrollCourseFailure, (state, { error }) => ({
        ...state,
        isLoading: false,
        error,
    })),
    on(StudentActions.unenrollCourse, (state) => ({
        ...state,
        isLoading: true,
    })),
    on(StudentActions.unenrollCourseSuccess, (state, { data }) => ({
        ...state,
        isLoading: false,
        enrolledCourses: state.enrolledCourses.filter((enrollment: Course) => enrollment.id !== data.courseId),
    })),
    on(StudentActions.unenrollCourseFailure, (state, { error }) => ({
        ...state,
        isLoading: false,
        error,
    })),
)


export const studentFeature = createFeature({
    name: studentFeatureKey,
    reducer: studentReducer,
});





