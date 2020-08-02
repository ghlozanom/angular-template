import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State, userIsLoggedIn } from './reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'track-app';
  userLoggedIn$: Observable<boolean>;

  constructor(
    private store: Store<State>
  ) {
     this.userLoggedIn$ = this.store.pipe(select(userIsLoggedIn));
  }
}
