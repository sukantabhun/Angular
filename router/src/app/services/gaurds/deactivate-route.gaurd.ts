import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  GuardResult,
  MaybeAsync,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

export interface IDdeactivateGaurd {
  canExit: () => boolean | Promise<boolean> | Observable<boolean>;
}

@Injectable({ providedIn: 'root' })
export class deactivateRoute implements CanDeactivate<IDdeactivateGaurd> {
  canDeactivate(
    component: IDdeactivateGaurd,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): boolean | Promise<boolean> | Observable<boolean> {
    return component.canExit();
  }
}
