import {ActivatedRoute, CanActivateFn, Router, RouterStateSnapshot} from '@angular/router';
import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard extends KeycloakAuthGuard {



  }

