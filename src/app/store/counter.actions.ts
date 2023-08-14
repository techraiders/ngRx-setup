import { Action, createAction, props } from "@ngrx/store";

// New method to create action
export const increment = createAction(`[Counter] Increment`, props<{payload: number}>());


// export const INCREMENT = `[Counter] Increment`;

// // // Older alternative to create action
// export class IncrementAction implements Action {
//   readonly type = INCREMENT;

//   constructor (public payload: number) {}
// }

// export type CounterActions = IncrementAction;