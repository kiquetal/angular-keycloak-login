import { Injectable } from '@angular/core';
import { KeycloakEvent, KeycloakEventType, KeycloakService } from 'keycloak-angular';

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
	  console.log("register");
	  this.keycloakService.keycloakEvents$.subscribe({
  next: async (event) => {
    if (event.type == KeycloakEventType.OnTokenExpired) {
	  await  this.keycloakService.logout();
    	console.log("expired!");
    }
  }
});
    return await this.keycloakService.loadUserProfile()
  }
  async getToken() {
    return await this.keycloakService.getToken()
  }
}
