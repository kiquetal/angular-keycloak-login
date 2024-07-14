import {KeycloakService} from "keycloak-angular";
import { environment} from "../../environments/environment";

const  initializeKeyCloak = (keycloak: KeycloakService) => {
  return () =>
    keycloak.init({
      config: {
        url: environment.keycloak.url,
        realm: environment.keycloak.realm,
        clientId: environment.keycloak.clientId
      },
      initOptions: {
      onLoad: 'check-sso',
      checkLoginIframe:false,
      enableLogging:true,
      silentCheckSsoRedirectUri:     window.location.origin + '/assets/silent-check-sso.html',

      },
      enableBearerInterceptor: true,
      bearerExcludedUrls: ['/assets', '/clients/public'],
 		shouldUpdateToken(request) {
    return false;
  }
    });
}

export {initializeKeyCloak};
