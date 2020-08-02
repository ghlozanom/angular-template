import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm, FormGroupDirective } from '@angular/forms';
import { ErrorStateMatcher } from '@angular-mdc/web/form-field';
import { Store } from '@ngrx/store';
import { login } from 'src/app/actions/user.actions';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  matcher = new MyErrorStateMatcher();

  loginForm = new FormGroup({
    username: new FormControl(
      { value: null, disabled: false },
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(11)
      ]),
    password: new FormControl(
      { value: null, disabled: false },
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(11)
      ])  
  });

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  get usernameValidationMessage(): string {
    if (this.loginForm.controls['username'].hasError('minlength')) {
      return 'Username is not long enough';
    } else if (this.loginForm.controls['username'].hasError('maxlength')) {
      return 'Username is max length is 11';
    } else if (this.loginForm.controls['username'].hasError('required')) {
      return 'Username is required';
    }
    return undefined;
  }  

  get passwordValidationMessage(): string {
    if (this.loginForm.controls['password'].hasError('minlength')) {
      return 'Password is not long enough';
    } else if (this.loginForm.controls['password'].hasError('maxlength')) {
      return 'Password is max length is 11';
    } else if (this.loginForm.controls['password'].hasError('required')) {
      return 'Password is required';
    }
    return undefined;
  }    

  submit(f: NgForm | FormGroup) {
    if (f.invalid) {
      return;
    }
    console.log('dispatching', this.loginForm.value);
    this.store.dispatch(login( new User(this.loginForm.value.username, this.loginForm.value.password)));
  }
  
  resetForm(formDirective: FormGroupDirective) {
    formDirective.resetForm();
    this.loginForm.reset();
  }  

}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
