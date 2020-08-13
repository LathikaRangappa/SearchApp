import { Action } from '@ngrx/store';
import { items } from './items';
import { UserActions, UserActionTypes } from './user.actions';


export const userFeatureKey = 'usersState';


export const initialState = [];

export function reducer(state = initialState, action: UserActions) {
  switch (action.type) {
      case UserActionTypes.ADD_PRODUCT:
        return 
          [...state,action.payload]
        
    default:
      return state;
  }

}
