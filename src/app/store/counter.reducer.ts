import { createReducer } from "@ngrx/store";

const initialState = 0; // value could be any primitive or no-premitive.

export const counterReducer = createReducer(initialState);

// An older alternative to create reducer
// export function counterReducer(state = initialState) {
//   return initialState;
// }