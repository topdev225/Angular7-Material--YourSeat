import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { AuthenticationService } from '../../core/services/authentication.service';
import { StorageService } from '../../core/services/storage.service';
import { Session } from '../../core/models/session.model';
import { LoginObject } from '../../core/models/login-object.model';

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

export enum ModalTypes {
  LOGIN = 0,
  FORGOT_PWD = 1,
  SPEAK = 2,
  SIGNUP = 3
}

@Component({
  selector: 'app-login-modal-dialog',
  templateUrl: 'loginmodal.component.html',
  styleUrls: ['loginmodal.component.sass']
})
export class LoginModalDialogComponent implements OnInit {
  public submitted: Boolean = false;
  public error: { code: number; message: string } = null;
  public type: ModalTypes = ModalTypes.LOGIN;
  public uiData = [
    {
      title: 'Welcome!',
      defaultMsg: '',
      fields: [
        {
          label: 'EMAIL',
          type: 'text',
          placeholder: '',
          errorMsg: 'Email is required'
        },
        {
          label: 'PASSWORD',
          type: 'password',
          placeholder: '',
          errorMsg: 'Password is required'
        }
      ],
      btnText: 'Log in',
      linkText: 'Forgot password?',
      linkSwitch: 1
    },
    {
      title: 'Forgot your password?',
      defaultMsg:
        'No worries, just enter your email and we\'ll send you a reset link',
      fields: [
        {
          label: 'EMAIL',
          type: 'text',
          placeholder: 'yourname@example.com',
          errorMsg: 'Email is required'
        }
      ],
      btnText: 'Send via email',
      linkText: 'Back to login',
      linkSwitch: 0
    },
    {
      title: 'Awesome!',
      defaultMsg: 'We look forward to speaking with you soon',
      fields: [
        {
          label: 'NAME',
          type: 'text',
          placeholder: '',
          errorMsg: 'Name is required'
        },
        {
          label: 'EMAIL',
          type: 'text',
          placeholder: 'youname@example.com',
          errorMsg: 'Email is required'
        }
      ],
      btnText: 'Send',
      linkText: '',
      linkSwitch: null
    }
  ];

  emailFormControl = new FormControl('', [Validators.required]);
  passwordFormControl = new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();

  constructor(
    public dialogRef: MatDialogRef<LoginModalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private authenticationService: AuthenticationService,
    private storageService: StorageService,
    private router: Router,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    if (this.data && this.data.type !== null) {
      this.type = this.data.type;
    }
  }

  onSubmit() {
    console.log('Loginform is submitted: ', this.emailFormControl.value);
    const username = this.emailFormControl.value;
    const password = this.passwordFormControl.value;

    this.submitted = true;
    this.error = null;
    switch (this.type) {
      case ModalTypes.LOGIN:
        this.requestLogin(username, password);
        break;
      case ModalTypes.SIGNUP:
        this.requestSignup();
        break;
      case ModalTypes.FORGOT_PWD:
        this.requestForgotPwd(username);
        break;
      case ModalTypes.SPEAK:
        this.requestSpeak(username, password);
        break;
      default:
        break;
    }
  }

  requestLogin(username: string, password: string) {
    this.authenticationService
      .login(new LoginObject({ username, password }))
      .then(
        data => {
          this.correctLogin(data);
          this.dialogRef.close();
        },
        error => {
          console.log('login error: ', error);
          this.error = {
            code: error.code,
            message: null
          };
          this.error.message = 'Incorrect email or password';
          // switch (error.code) {
          //   case 'auth/wrong-password':
          //     this.error.message = 'Incorrect email or password';
          //     break;
          //   default:
          //     this.error.message = error.message;
          // }
        }
      );
  }

  requestSignup() {
    console.log('Modal requested Signup');
    return true;
  }

  requestForgotPwd(email: string) {
    if (!email) {
      console.log('Forgot pwd email not set');
      return false;
    }
    return this.authenticationService
      .sendPasswordResetEmail(email)
      .then(res => {
        console.log('Sent password reset email: ', res);
        this.openSnackBar('Thanks! Please check ' + email + ' for a link to reset your password.');
        this.closeModal();
        return true;
      })
      .catch(err => {
        console.log('Error sending password reset email', err);
        switch (err.code) {
          case 'auth/user-not-found':
            // this.openSnackBar('No email found');
            this.error = {
              code: err.code,
              message: 'No email found'
            };
            break;
          default:
            // this.openSnackBar(err.message);
            this.error = {
              code: err.code,
              message: err.message
            };
            break;
        }
        return true;
      });
  }

  requestSpeak(username: string, password: string) {
    if (username && password) {
      this.openSnackBar('Thanks for signing up! Our team will reach out in the next 24 hours.');
      this.closeModal();
    }
  }

  private correctLogin(data: Session) {
    // console.log('setting current sessino: ', data);
    // this.storageService.setCurrentSession(data);
    this.router.navigate(['/home']);
  }

  public switchModal(dest: ModalTypes) {
    this.type = dest;
    this.error = null;
    this.emailFormControl.setValue('');
    this.passwordFormControl.setValue('');
  }

  public closeModal() {
    this.error = null;
    this.dialogRef.close();
    return true;
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 4 * 1000,
      horizontalPosition: 'center'
    });
  }
}
