import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, authFeatureKey } from './coursemanagement.reducer';

export const selectAuthState = createFeatureSelector<State>(authFeatureKey);

export const selectAuthUser = createSelector(
  selectAuthState,
  (state) => state.authUser
);
