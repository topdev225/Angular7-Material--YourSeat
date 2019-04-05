import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Title } from '@angular/platform-browser';
import { LoginModalDialogComponent } from './login-modal/loginmodal.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  constructor(private titleService: Title, public dialog: MatDialog) {}

  ngOnInit() {
    this.titleService.setTitle('YourSeat - Family First Compliance Services');
  }

  openLoginModal() {
    this.dialog.open(LoginModalDialogComponent, {
      height: '550px',
      width: '400px',
      panelClass: 'login-modal'
    });
  }

  openSpeakDialog() {
    this.dialog.open(LoginModalDialogComponent, {
      height: '550px',
      width: '400px',
      panelClass: 'login-modal',
      data: {
        type: 2
      }
    });
  }

  goToLearnMore() {
    return true;
  }
}
