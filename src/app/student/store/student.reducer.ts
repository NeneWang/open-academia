import { Enrollment } from './../pages/enrollments/models/index';

import { createFeature, createReducer, on } from '@ngrx/store';
import { StudentActions } from './student.actions';
import { Course, UserAverage, UserCourse } from 'src/app/academia/models';


export const studentFeatureKey = 'student'
export interface State {
    isLoading: boolean;
    isLoadingDialogOptions: boolean;
    error: unknown;
    courses: Course[];
    enrolledCourses: Course[];
    enrolledCoursesIds: number[];
    userRankings: UserAverage[]; 
}

export const initialState: State = {
    isLoading: false,
    isLoadingDialogOptions: false,
    error: null,
    courses: [],
    enrolledCourses: [],
    enrolledCoursesIds: [],
    userRankings: [],
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
        enrolledCoursesIds: data.map((course: Course) => course.id),
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
        enrolledCoursesIds: [...state.enrolledCoursesIds, ...data.map((course: UserCourse) => course.courseId)],
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
        enrolledCoursesIds: state.enrolledCoursesIds.filter((id: number) => id !== data.courseId),
    })),
    on(StudentActions.unenrollCourseFailure, (state, { error }) => ({
        ...state,
        isLoading: false,
        error,
    })),

    // Load Courses
    on(StudentActions.loadCourses, (state) => ({
        ...state,
        courses: [],
        isLoading: true,
    })),
    on(StudentActions.loadCoursesSuccess, (state, { data }) => ({
        ...state,
        isLoading: false,
        courses: data,
    })),
    on(StudentActions.loadCoursesFailure, (state, { error }) => ({
        ...state,
        isLoading: false,
        error,
    })),

    // User Rankings
    on(StudentActions.loadUserRankings, (state) => ({
        ...state,
        isLoading: true,

    })),

    on(StudentActions.loadUserRankingsSuccess, (state, { data }) => ({
        ...state,
        isLoading: false,
        userRankings: data,
    })),

    on(StudentActions.loadUserRankingsFailure, (state, { error }) => ({
        ...state,
        isLoading: false,
        error,
    })),

    // Selected User Courses.
    on(StudentActions.loadSelectedUserCourses, (state) => ({
        ...state,
        isLoading: true,
    }))


)


export const studentFeature = createFeature({
    name: studentFeatureKey,
    reducer: studentReducer,
});





