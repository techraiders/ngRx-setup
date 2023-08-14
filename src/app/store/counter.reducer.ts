import { createReducer, on } from "@ngrx/store";
import { increment } from "./counter.actions";

const initialState = 0; // value could be any primitive or no-premitive.

// export const counterReducer = createReducer(initialState,
//   on(increment, (state, action) => state + action.value)
// );

// An older alternative to create reducer
export function counterReducer(state = initialState, action: any) {
  switch (action.type) {
    case `[Counter] Increment`:
      return state + action.value;

    default:
      return state;
  }
}