import { Injectable } from '@angular/core';
import { UserService } from '../user.service';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { routes } from '../../app.routes';

interface User {
  id: string;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserResolverService implements Resolve<User> {
  constructor(private userService: UserService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): User | Promise<User> {
    let id = route.params['id'];

    let details = this.userService.getUser(id);
    console.log(details);
    return details;
  }
}
