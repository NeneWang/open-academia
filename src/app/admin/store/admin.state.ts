import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface AdminState {
    // Define your state here
}

export const initialState: AdminState = {
    // Initialize your state here
};

export const selectAdminState = createFeatureSelector<AdminState>('admin');

// Define your selectors here