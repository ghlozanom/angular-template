import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  on
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { userLoggedIn } from '../actions/user.actions';

export interface State {
  userLoggedIn: boolean;
}

export const userLogInState = false;

const _userLoggedIn = createReducer(
  userLogInState,
  on(userLoggedIn, (state)  => state = true )
);


export const reducers: ActionReducerMap<State> = {
  userLoggedIn: _userLoggedIn
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];


export const selectUserLoggedIn = (state:State) => state.userLoggedIn;

export const userIsLoggedIn = createSelector(
  selectUserLoggedIn,
  (userLoggedIn: boolean) => userLoggedIn
);