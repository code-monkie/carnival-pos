import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor (private authService: AuthService, private router: Router){};

    public canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot)  {
        if (this.authService.isAuthenticated()){
            return true;
        } else {
            this.router.navigate(["/signin"]);
        }
    }
}