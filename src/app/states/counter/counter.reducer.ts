import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

export interface CounterState {
  count: number;
}

export const intialCounterState: CounterState = {
  count: 0,
};
export const counterReducer = createReducer(
  intialCounterState,
  on(increment, (state) => ({ ...state, count: state.count + 1 })),
  on(decrement, (state) => ({ ...state, count: state.count - 1 })),
  on(reset, (state) => ({ ...state, count: 0 }))
);
