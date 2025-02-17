import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private routes: Router) {}

  isLoggedIn = new BehaviorSubject<boolean>(false);

  isLoggedIn$ = this.isLoggedIn.asObservable();

  logIn() {
    this.isLoggedIn.next(true);
    console.log(this.isLoggedIn.value);
  }

  logOut() {
    this.isLoggedIn.next(false);
    this.routes.navigate(['/']);
    console.log(this.isLoggedIn.value);
  }

  isAuthenticated() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.isLoggedIn.value), 500);
    });
  }
}
