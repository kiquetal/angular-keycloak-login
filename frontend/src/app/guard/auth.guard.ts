import { Injectable } from '@angular/core';
import {
 ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard extends KeycloakAuthGuard {

  constructor(protected override readonly router: Router,
              protected  readonly  keycloak: KeycloakService) {
    super(router,keycloak);
  }

async isAccessAllowed(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.authenticated) {

      console.log("good bye");
      this.keycloak.login();

    }
    console.log("Roles:-guard ", this.roles)
    const requiredRoles = route.data["roles"];
    if (!(requiredRoles instanceof Array) || requiredRoles.length === 0) {
      return true;
    }

    return requiredRoles.every((role) => this.roles.includes(role));

  }


  }

