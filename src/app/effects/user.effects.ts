import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { login, userLoggedIn } from '../actions/user.actions';
import { UserService } from '../services/user/user.service';
import { User } from '../models/user';
 
@Injectable()
export class UserEffects {
 
  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType(login),
    mergeMap((user:User) => this.userService.login(user)
      .pipe(
        map( () => ( userLoggedIn() )),
        catchError(() => {
            console.log('Errorrrr');
            return EMPTY;
        })
      ))
    )
  );
 
  constructor(
      private userService: UserService,
    private actions$: Actions
  ) {}
}