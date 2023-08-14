import { Actions, createEffect, ofType } from "@ngrx/effects";
import { increment, init, set } from "./counter.actions";
import { of, switchMap, tap, withLatestFrom } from "rxjs";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectCount } from "./couter.selectors";


@Injectable()
export class CounterEffects {
  constructor(private actions$: Actions, private store: Store<{counter: number}>) {}

  loadCount = createEffect(() => this.actions$.pipe(
    ofType(init),
    switchMap(() => {
      const storedCounter = localStorage.getItem(`count`);
      if (storedCounter) {
        return of(set({payload: +storedCounter}));
      } else {
        return of(set({payload: 0}));
      }
    })
  ));

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