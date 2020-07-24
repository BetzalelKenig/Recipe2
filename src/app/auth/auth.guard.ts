import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  /* guard for protect routhes when the user not exist */

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Promise<boolean | UrlTree>
    | Observable<boolean | UrlTree> {
    return this.authService.user.pipe(
      /* get the latest value and then unsubscribe */
      take(1),
      /* transform the user to boolean */
      map((user) => {
        const isAuth = !!user;
        /* return true if the user is exist else redirect to auth routh */
        return isAuth ? true : this.router.createUrlTree(['/auth']);
      })
    );
  }
}
