import { ActionReducerMap } from '@ngrx/store';
import {
  authFeatureKey,
  reducer as authReducer,
  State as AuthState,
} from '../academia/store/coursemanagement.reducer';
import { counterReducer } from './counter.reducer';

export interface AppState {
  [authFeatureKey]: AuthState;
  "counter": any;
}

export const appReducer: ActionReducerMap<AppState> = {
  [authFeatureKey]: authReducer,
  "counter": counterReducer,
};
