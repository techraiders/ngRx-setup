import { Actions, createEffect, ofType } from "@ngrx/effects";
import { increment } from "./counter.actions";
import { tap, withLatestFrom } from "rxjs";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectCount } from "./couter.selectors";


@Injectable()
export class CounterEffects {
  constructor(private actions$: Actions, private store: Store<{counter: number}>) {}

  saveCount = createEffect(() => {
    return this.actions$.pipe(
      ofType(increment),
      withLatestFrom(this.store.select(selectCount)),
      tap(([action, counter]) => {
        console.log(action);
        localStorage.setItem(`count`, counter.toString());
      })
    )
  }, {dispatch: false});
}