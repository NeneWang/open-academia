import { createReducer, on } from '@ngrx/store';
import * as CounterActions from './counter.actions';

export const initialState = {
  count: 0,
};

export const counterReducer = createReducer(
  initialState,
  on(CounterActions.increment, (state) => ({ ...state, count: state.count + 1 })),
  on(CounterActions.decrement, (state) => ({ ...state, count: state.count - 1 }))
);


// ng generate service counter
