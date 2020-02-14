import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LogadoGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const currentUser = this.authService.currentUserValue;
        if (currentUser) {
          // logged in so return true
          return true;
        }

      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
  }
}
