import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { StorageService } from '../core/services/storage.service';
import { User } from '../core/models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit, OnDestroy {
  public user: User;
  // tabNames: string[] = [ 'summary', 'clients', 'documents' ];
  tabNames: string[] = [ 'summary', 'clients' ];
  userSubject: Subject<User> = new Subject<User>();
  userStream: Observable<any> = this.userSubject.asObservable();

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private titleService: Title,
    private storageService: StorageService,
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Montgomery County Social Services');
    // this.user = this.storageService.getCurrentUser();
    // this.userStream.subscribe(user => {
    //   console.log('user changed: ', user);
    //   this.user = user;
    // });
    this.storageService.updateSession$.pipe(takeUntil(this._unsubscribeAll)).subscribe(session => {
      this.user = session ? session.user : null;
      console.log('home session = ', session);
    });
  }

  ngOnDestroy() {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
