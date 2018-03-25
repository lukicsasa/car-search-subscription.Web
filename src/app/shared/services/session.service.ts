import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';

import 'lockr';
declare let Lockr;
@Injectable()
export class SessionService {
  
  private _user: User;
  private _accessToken: string;
  private _isLoggedIn: boolean = false;
  sessionChangedStream = new Subject();

  constructor(private router: Router) {
    this.initSession(Lockr.get('authToken'), Lockr.get('currentUser'));
  }

  get user(): User {
    return this._user;
  }
  set user(user: User) {
    this._user = user;
  }

  get accessToken(): string {
    return this._accessToken;
  }
  get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  getDefaultRoute(): string {
    if (this.isLoggedIn) {
      return '';
    }
    return '/login';
  }

  initSession(accessToken, user) {
    if (accessToken && user) {
      this._accessToken = accessToken;
      this.user = user;
      Lockr.set('authToken', accessToken);
      Lockr.set('currentUser', user);
      this._isLoggedIn = true;
      this.sessionChangedStream.next(this._user);
    }
  }

  logout() {
    this._isLoggedIn = false;
    this._accessToken = null;
    this._user = null;
    Lockr.rm('authToken');
    Lockr.rm('currentUser');
    this.sessionChangedStream.next(this._user);
    this.router.navigate([this.getDefaultRoute()]);
  }
}