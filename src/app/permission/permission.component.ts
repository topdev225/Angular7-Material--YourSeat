import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators
} from '@angular/forms';
import { AuthenticationService } from '../core/services/authentication.service';
import { StorageService } from '../core/services/storage.service';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.sass']
})
export class PermissionComponent implements OnInit {
  expandState = false;
  showEmail = false;
  showPassword = false;
  showUsername = false;
  emailFormControl = new FormControl('', [Validators.required]);
  passwordFormControl = new FormControl('', [Validators.required]);
  oldPasswordFormControl = new FormControl('', [Validators.required]);
  newPasswordFormControl = new FormControl('', [Validators.required]);
  confirmPasswordFormControl = new FormControl('', [Validators.required]);
  usernameFormControl = new FormControl('', [Validators.required]);
  emailError = null;
  passwordError = null;
  usernameError = null;

  constructor(
    private authenticationService: AuthenticationService,
    private storageService: StorageService,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit() {}

  openSnackBar(message: string, action?: string) {
    this.snackBar.open(message, action, {
      duration: 4 * 1000,
      horizontalPosition: 'center'
    });
    console.log('ToDo: OpenSnackBar');
  }

  toggleForm(type?: string) {
    if (type === 'email') {
      this.showEmail = !this.showEmail;
      this.showPassword = false;
      this.showUsername = false;
    } else if (type === 'password') {
      this.showPassword = !this.showPassword;
      this.showEmail = false;
      this.showUsername = false;
    } else if (type === 'username') {
      this.showUsername = !this.showUsername;
      this.showEmail = false;
      this.showPassword = false;
    } else {
      this.showUsername = false;
      this.showEmail = false;
      this.showPassword = false;
    }
    this.setEmailError(null);
    this.setPasswordError(null);
    this.setUsernameError(null);
  }

  setEmailError(error: any) {
    this.emailError = error;
  }

  setPasswordError(error: any) {
    this.passwordError = error;
  }

  setUsernameError(error: any) {
    this.usernameError = error;
  }

  updateEmail() {
    const newEmail: string = this.emailFormControl.value;
    const password: string = this.passwordFormControl.value;
    if (!newEmail) {
      this.setEmailError({
        code: 400,
        message: 'Please input new email'
      });
      return false;
    }
    if (!password) {
      this.setEmailError({
        code: 400,
        message: 'Please input password'
      });
      return false;
    }
    this.authenticationService.updateEmail(newEmail, password)
    .then(res => {
      this.setEmailError(null);
      this.openSnackBar('Email updated successfully');
      console.log('Email updaetd successfully: ', res);
      this.toggleForm();
      return true;
    })
    .catch(err => {
      let message = err.message || 'Error updating email';
      switch (err.code) {
        case 'auth/wrong-password':
          message = 'Please enter the correct password';
          break;
        case 'auth/invalid-email':
          message = 'Please enter a valid email address';
          break;
        default:
          break;
      }
      this.setEmailError({
        code: 400,
        message
      });
      console.log('Error email update: ', err);
    });
  }

  updatePassword() {
    const oldPassword = this.oldPasswordFormControl.value;
    const newPassword = this.newPasswordFormControl.value;
    const confirmPassword = this.confirmPasswordFormControl.value;

    if (newPassword === '' || newPassword !== confirmPassword) {
      this.setPasswordError({
        code: 400,
        message: 'Your password and confirmation password do not match'
      });
      return false;
    }

    this.authenticationService.updatePassword(oldPassword, newPassword)
    .then(res => {
      console.log('Password updated successfully', res);
      this.setPasswordError(null);
      this.openSnackBar('Password updated successfully');
      this.toggleForm();
      return true;
    })
    .catch(err => {
      console.log('Error updating password: ', err);
      let message = err.message || 'Error updating password';
      switch (err.code) {
        case 'auth/wrong-password':
          message = 'Please enter the correct current password';
          break;
        default:
          break;
      }
      this.setPasswordError({
        code: 400,
        message
      });
    });
  }

  updateUsername() {
    const newUsername: string = this.usernameFormControl.value;
    if (!newUsername) {
      this.setUsernameError({
        code: 400,
        message: 'Please input new username'
      });
      return false;
    }
    console.log('New username: ', newUsername);
    this.authenticationService.updateProfile({ displayName: newUsername })
    .then(res => {
      console.log('Username updated correctly: ', res);
      this.setUsernameError(null);
      this.storageService.setCurrentSessionField({
        user: {
          username: newUsername
        }
      });
      this.openSnackBar('Username updated successfully');
      this.toggleForm();
    })
    .catch(err => {
      console.log('Failed to updated username: ', err);
      // this.openSnackBar(err.message || 'Error updating username');
      this.setUsernameError({
        code: 400,
        message: err.message || 'Error updating username'
      });
    });
  }
}
