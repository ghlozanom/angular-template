import { createAction, props } from '@ngrx/store';
import { User } from '../models/user';

export const login = createAction(
    '[Login Component] Login',
    props<User>());

export const userLoggedIn = createAction(
    '[Login Component] User logged in');    