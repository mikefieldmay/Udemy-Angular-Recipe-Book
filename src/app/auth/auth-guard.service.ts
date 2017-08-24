import {Router, RouterStateSnapshot,  ActivatedRouteSnapshot,   CanActivate} from '@angular/router';
import { AuthService } from "app/auth/auth.service";
import { Injectable } from "@angular/core";


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isAuthenticated() === true) {
      return true;
    } else {
      this.router.navigate(['./signup']);
    }
  }
}
