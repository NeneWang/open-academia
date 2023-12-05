import { createReducer, on } from '@ngrx/store';
import * as AdminActions from './admin.actions';


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
    // Handle your actions here
);