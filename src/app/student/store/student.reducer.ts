
import {createReducer, on} from '@ngrx/store';
import * as StudentActions from './student.actions';


export const studentFeatureKey = 'student'
export interface State {
    isLoading: boolean;
    isLoadingDialogOptions: boolean;
    error: unknown;
}

export const initialState: State = {
    isLoading: false,
    isLoadingDialogOptions: false,
    error: null,
}

export const studentReducer = createReducer(
    initialState
)






