import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import {User} from '../models/user.model';
import {USERS} from '../mocks/mock-users';

@Injectable()
export class MockBackendInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // array in local storage for registered users
    const users: any[] = JSON.parse(localStorage.getItem('users')) || [];

    // wrap in delayed observable to simulate server api call
    return of(null).pipe(mergeMap(() => {

      // fake authenticate api end point
      if (request.url.endsWith('/api/authenticate/login') && request.method === 'POST') {
        const params = request.body;

        // check user credentials and return fake jwt token if valid
        const found: User = USERS.find((user: User) => {
          return (params.username === user.username);
        });
        if (found) {
          if (params.password === found.password) {
            return of(new HttpResponse({status: 200, body: {token: 'fake-token-jwt', user: found}}));
          } else {
            return throwError({code: 2, message: 'Username and/or password are incorrect. \nPlease try again.'});
          }
        } else {
          return throwError({code: 1, message: 'Username does not exists'});
        }

      }

      if (request.url.endsWith('/api/authenticate/logout') && request.method === 'POST') {
        return of(new HttpResponse({status: 200, body: true}));
      }

      // pass through any requests not handled above
      return next.handle(request);

    }))
    // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
      .pipe(materialize())
      .pipe(delay(500))
      .pipe(dematerialize());
  }
}

export let mockBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: MockBackendInterceptor,
  multi: true
};
