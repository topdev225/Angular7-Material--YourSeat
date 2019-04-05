import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { AuthenticationService } from '../core/services/authentication.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      isSubmitted &&
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-password-reset',
  templateUrl: 'passwordReset.component.html',
  styleUrls: ['passwordReset.component.sass']
})
export class PasswordResetComponent implements OnInit, OnDestroy {
  submitted: Boolean = false;
  error: { code: number; message: string } = null;
  ngUnsubscribe: Subject<any> = new Subject<any>();
  actionCode: string;
  mode: string;
  actionCodeChecked = false;

  newPasswordFormControl = new FormControl('', [Validators.required]);
  confirmPasswordFormControl = new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(params => {
        // if we didn't receive any parameters,
        // we can't do anything
        if (!params) { this.router.navigate(['/home']); }

        this.mode = params['mode'];
        this.actionCode = params['oobCode'];

        switch (params['mode']) {
          case 'resetPassword':
            {
              // Verify the password reset code is valid.
              this.authenticationService
                .verifyPasswordResetCode(this.actionCode)
                .then(email => {
                  this.actionCodeChecked = true;
                })
                .catch(e => {
                  // Invalid or expired action code. Ask user to try to reset the password
                  // again.
                  console.log('invalid reset password code', this.actionCode);
                  this.router.navigate(['/login']);
                });
            }
            break;
          default: {
            console.log('query parameters are missing');
            this.router.navigate(['/login']);
          }
        }
      });
  }

  ngOnDestroy() {
    // End all subscriptions listening to ngUnsubscribe
    // to avoid memory leaks.
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  onSubmit() {
    const newPassword = this.newPasswordFormControl.value;
    const confirmPassword = this.confirmPasswordFormControl.value;

    this.submitted = true;
    this.error = null;
    if (newPassword !== confirmPassword) {
      this.error = {
        code: 400,
        message: 'Passwords do not match'
      };
      return false;
    }

    console.log(
      'Passwordreset form is submitted: ',
      this.newPasswordFormControl.value
    );
    this.authenticationService.confirmPasswordReset(this.actionCode, newPassword)
    .then(res => {
      console.log('new password is saved: ', res);
      this.router.navigate(['/login']);
    })
    .catch(err => {
      console.log('error saving new password: ', err);
      this.error = err;
      if (err.code === 'auth/weak-password') {
        this.error = null;
      }
      return false;
    });

  }
}
