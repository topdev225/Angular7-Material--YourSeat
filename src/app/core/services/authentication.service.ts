import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { UserCredential } from 'firebase/auth';
import { User } from 'firebase';
import { Observable } from 'rxjs';
import { LoginObject } from '../models/login-object.model';
import { UpdateProfileModel } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { StorageService } from './storage.service';

@Injectable()
export class AuthenticationService {
  user: User;

  constructor(
    private http: HttpClient,
    public afAuth: AngularFireAuth,
    public storageService: StorageService
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        console.log('user init: ', user);
        storageService.setCurrentSession({
          user: {
            id: user.uid,
            username: user.displayName,
            email: user.email,
            clients: []
          },
          token: user.refreshToken
        });
        if (!user.displayName) {
          const newDisplayName = this.afAuth.auth.currentUser.email
          .split('@')[0]
          .split('.')[0];
          this.afAuth.auth.updateCurrentUser(user).then(() => {
            this.afAuth.auth.currentUser.updateProfile({
              displayName: newDisplayName,
              photoURL: null
            })
            .then(res => {
              console.log('Updated displayname successfully', res);
              this.storageService.setCurrentSessionField({
                user: {
                  username: newDisplayName
                }
              });
            })
            .catch(err => {
              console.log('Error updating displayname: ', err);
            });
          });
        }
      } else {
        localStorage.setItem('currentUser', null);
      }
    });
  }

  private basePath = '/api/authenticate/';

  login(loginObj: LoginObject): Promise<UserCredential> {
    return this.afAuth.auth.signInWithEmailAndPassword(
      loginObj.username,
      loginObj.password
    );
  }

  logout(): Promise<void> {
    // return this.http.post<Boolean>(this.basePath + 'logout', {});
    return this.afAuth.auth.signOut();
  }

  sendPasswordResetEmail(email: string) {
    return this.afAuth.auth.sendPasswordResetEmail(email, {
      url: 'http://localhost:4200/reset-password'
    });
  }

  verifyPasswordResetCode(code: string) {
    return this.afAuth.auth.verifyPasswordResetCode(code);
  }

  confirmPasswordReset(code: string, newPassword: string) {
    return this.afAuth.auth.confirmPasswordReset(code, newPassword);
  }

  updateProfile(data: UpdateProfileModel) {
    return this.afAuth.auth.currentUser.updateProfile({
      displayName: this.user.displayName,
      photoURL: this.user.photoURL,
      ...data
    });
  }

  updateEmail(newEmail: string, password: string) {
    const email = this.afAuth.auth.currentUser.email;
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      return userCredential.user.updateEmail(newEmail);
    });
  }

  updatePassword(oldPassword: string, newPassword: string) {
    const email = this.afAuth.auth.currentUser.email;
    const credentials = firebase.auth.EmailAuthProvider.credential(email, oldPassword);
    return this.afAuth.auth.currentUser.reauthenticateWithCredential(credentials)
    .then(success => {
      return this.afAuth.auth.currentUser.updatePassword(newPassword);
    });
  }
}
