import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { StorageService } from '../../../core/services/storage.service';
import { AuthenticationService } from '../../../core/services/authentication.service';

@Component({
  selector: 'app-home-account-avatar',
  templateUrl: './accountAvatar.component.html',
  styleUrls: ['./accountAvatar.component.sass']
})
export class HomeAccountAvatarComponent implements OnInit, OnDestroy {
  @Input() userName: string;

  constructor(
    private storageService: StorageService,
    private authenticationService: AuthenticationService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  public logout(): void {
    this.authenticationService.logout()
    .then(res => {
      console.log('Logout success: ', res);
      this.router.navigate(['/login']);
    })
    .catch(err => {
      console.log('Error logging out', err);
    });
  }

  public goToAccountPage() {
    // this.router.navigate(['/settings', this.userName]);
    this.router.navigate(['/settings/account']);
  }
}
