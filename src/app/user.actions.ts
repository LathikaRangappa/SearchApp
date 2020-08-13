import { Action } from '@ngrx/store';
import { items } from './items'

export enum UserActionTypes {
  LoadUsers = '[items] Load Users',
  LoadUsersSuccess = '[items] Load Users Success',
  LoadUsersFailure = '[items] Load Users Failure',
  ADD_PRODUCT = 'ADD_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT'
}

export class AddProduct implements Action {
  readonly type = UserActionTypes.ADD_PRODUCT
  constructor(public payload: any[]) { }
}

export class LoadUsers implements Action {
  readonly type = UserActionTypes.LoadUsers;
  constructor(public payload:any) { }
}

export class LoadUsersSuccess implements Action {
  readonly type = UserActionTypes.LoadUsersSuccess;
  constructor(public payload: { data: any }) { }
}

export class LoadUsersFailure implements Action {
  readonly type = UserActionTypes.LoadUsersFailure;
  constructor(public payload: { error: any }) { }
}

export type UserActions = AddProduct | LoadUsers | LoadUsersSuccess | LoadUsersFailure;

