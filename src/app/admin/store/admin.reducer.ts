import { createReducer, on } from '@ngrx/store';
import { initialState } from './admin.state';
import * as AdminActions from './admin.actions';

export const adminReducer = createReducer(
    initialState,
    // Handle your actions here
);