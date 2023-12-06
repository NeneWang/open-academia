import { Course } from 'src/app/academia/models';
import { createReducer, on } from '@ngrx/store';
import { AdminActions } from './admin.actions';


export const adminFeatureKey = 'admin';

export interface State {

    isLoading: boolean;
    isLoadingDialogOptions: boolean;
    error: unknown;
}



export const initialState: State = {
    isLoading: false,
    isLoadingDialogOptions: false,
    error: null,
};

export const adminReducer = createReducer(
    initialState,
    // Courses Management
    on(AdminActions.loadCourses, (state) => ({
        ...state,
        isLoading: true,
    })),
    on(AdminActions.loadCoursesSuccess, (state, { data }) => ({
        ...state,
        isLoading: false,
        courses: data,
    })),
    on(AdminActions.loadCoursesFailure, (state, { error }) => ({
        ...state,
        isLoading: false,
        error,
    })),
    on(AdminActions.createCourse, (state) => ({
        ...state,
        isLoading: true,
    })),

    on(AdminActions.createCourseFailure, (state, { error }) => ({
        ...state,
        isLoading: false,
        error,
    })),

    on(AdminActions.updateCourse, (state) => ({
        ...state,
        isLoading: true,
    })),

    on(AdminActions.updateCourseFailure, (state, { error }) => ({
        ...state,
        isLoading: false,
        error,
    })),

    on(AdminActions.deleteCourse, (state) => ({
        ...state,
        isLoading: true,
    })),

    // Users Management
    on(AdminActions.loadUsers, (state) => ({
        ...state,
        isLoading: true,
    })),
    on(AdminActions.loadUsersSuccess, (state, { data }) => ({
        ...state,
        isLoading: false,
        users: data,
    })),
    on(AdminActions.loadUsersFailure, (state, { error }) => ({
        ...state,
        isLoading: false,
        error,
    })),
    on(AdminActions.createUser, (state) => ({
        ...state,
        isLoading: true,
    })),
    on(AdminActions.createUserFailure, (state, { error }) => ({
        ...state,
        isLoading: false,
        error,
    })),
    on(AdminActions.updateUser, (state) => ({
        ...state,
        isLoading: true,
    })),
    on(AdminActions.updateUserFailure, (state, { error }) => ({
        ...state,
        isLoading: false,
        error,
    })),
    on(AdminActions.deleteUser, (state) => ({
        ...state,
        isLoading: true,
    })),
    
);