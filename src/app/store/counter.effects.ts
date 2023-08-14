import { Actions, createEffect, ofType } from "@ngrx/effects";
import { increment } from "./counter.actions";
import { tap } from "rxjs";
import { Injectable } from "@angular/core";


@Injectable()
export class CounterEffects {
  constructor(private actions$: Actions) {}

  saveCount = createEffect(() => {
    return this.actions$.pipe(
      ofType(increment),
      tap((action) => {
        console.log(action);
        localStorage.setItem(`count`, action.payload.toString());
      })
    )
  }, {dispatch: false});
}