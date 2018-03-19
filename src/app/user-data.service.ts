import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { User } from './model';
import { tap, delay } from 'rxjs/operators';

@Injectable()
export class UserDataService {

  constructor() { }

  get currentUser(): Observable<User> {
    return of({
      name: "Miłosz",
      favoriteBandId: "133cfef7-6f96-40fe-86a1-c7ca9c5cbd4e"
    }).pipe(
      tap(() => console.log('Fetching user data started')),
      delay(1000),
      tap(() => console.log('Fetching user data finished')),
    );;
  }

}