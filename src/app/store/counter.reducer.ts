import { createReducer, on } from "@ngrx/store";
import { increment } from "./counter.actions";

const initialState = 0; // value could be any primitive or no-premitive.

export const counterReducer = createReducer(initialState,
  on(increment, state => ++state)
);

// An older alternative to create reducer
// export function counterReducer(state = initialState) {
//   return initialState;
// }