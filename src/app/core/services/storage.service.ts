import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import * as deepmerge from 'deepmerge';
import { Session } from '../models/session.model';
import { User } from '../models/user.model';

@Injectable()
export class StorageService {
  private localStorageService;
  private currentSession: Session = null;
  updateSession$: BehaviorSubject<any> = new BehaviorSubject<any>(this.currentSession);

  constructor(private router: Router) {
    this.localStorageService = localStorage;
    this.currentSession = this.loadSessionData();
  }

  setCurrentSession(session: Session): Session {
    this.currentSession = session;
    this.localStorageService.setItem('currentUser', JSON.stringify(session));
    this.updateSession$.next(session);
    return this.currentSession;
  }

  setCurrentSessionField(data: Object): Session {
    const newSession = deepmerge(this.currentSession, data);
    console.log('setcurrentsessionfield: ', this.currentSession, newSession);
    return this.setCurrentSession(newSession);
  }

  loadSessionData(): Session {
    const sessionStr = this.localStorageService.getItem('currentUser');
    console.log('loading current session from local storage: ', sessionStr);
    return sessionStr ? <Session>JSON.parse(sessionStr) : null;
  }

  getCurrentSession(): Session {
    return this.currentSession;
  }

  removeCurrentSession(): void {
    this.localStorageService.removeItem('currentUser');
    this.currentSession = null;
  }

  getCurrentUser(): User {
    const session: Session = this.getCurrentSession();
    return session && session.user ? session.user : null;
  }

  isAuthenticated(): boolean {
    return this.getCurrentToken() != null ? true : false;
  }

  getCurrentToken(): string {
    const session = this.getCurrentSession();
    return session && session.token ? session.token : null;
  }

  logout(): void {
    this.removeCurrentSession();
  }
}
