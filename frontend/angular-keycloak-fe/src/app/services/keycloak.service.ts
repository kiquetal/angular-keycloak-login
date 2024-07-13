import { Injectable } from '@angular/core';
import {KeycloakService} from "keycloak-angular";

@Injectable({
  providedIn: 'root'
})
export class MyKeycloakService {

  constructor(private  readonly  keycloakService: KeycloakService) { }

  isUserLoggedIn(): boolean {
    return this.keycloakService.isLoggedIn();
  }
  async logout() {
    await this.keycloakService.logout();
  }
  async getUserProfile() {
    return await this.keycloakService.loadUserProfile()
  }
  async getToken() {
    return await this.keycloakService.getToken()
  }
}
