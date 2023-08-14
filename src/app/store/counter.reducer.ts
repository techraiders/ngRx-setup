import { Action, createReducer, on } from "@ngrx/store";
// import { CounterActions, INCREMENT, IncrementAction } from "./counter.actions";
import { increment } from "./counter.actions";

const initialState = 0; // value could be any primitive or no-premitive.

export const counterReducer = createReducer(initialState,
  on(increment, (state, action) => state + action.payload)
);


// An older alternative to create reducer
// export function counterReducer(state = initialState, action: CounterActions | Action) {
//   switch (action.type) {
//     case INCREMENT:
//       return state + (action as IncrementAction).payload;

//     default:
//       return state;
//   }
// }