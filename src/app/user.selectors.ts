import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './user.reducer'

const getUserFeatureState = createFeatureSelector<State>('usersState');

export const getItems = createSelector(
    getUserFeatureState,
    state => state.items
)

export const getError = createSelector(
    getUserFeatureState,
    state => state.error
)