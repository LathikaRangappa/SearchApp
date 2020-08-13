import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {ImageService} from './shared/image.service';
import * as userActions from './user.actions'
import {mergeMap,map ,catchError} from 'rxjs/operators';



@Injectable()
export class UserEffects {



  constructor(private actions$: Actions,private serv:ImageService) {}

  @Effect()
  loadUsers$: Observable<Action> = this.actions$.pipe(
    ofType(userActions.UserActionTypes.LoadUsers),
    mergeMap(
      action => this.serv.getImages().pipe(
        map(items => (new userActions.LoadUsersSuccess({data:items}))),
      catchError(err => of(new userActions.LoadUsersFailure({error:err})))
    )
    )
  )

}
