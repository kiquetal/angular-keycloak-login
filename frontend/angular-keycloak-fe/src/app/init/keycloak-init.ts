import {KeycloakService} from "keycloak-angular";

const  initializeKeyCloak = (keycloak: KeycloakService) => {
  return () =>
    keycloak.init({
      config: {
        url: 'http://10.105.200.211',
        realm: 'phoenix',
        clientId: 'angular-client'
      },
      initOptions: {
      onLoad: 'check-sso',
      silentCheckSsoRedirectUri: window.location.origin + '/assets/silent-check-sso.html'
      },
      enableBearerInterceptor: true,
      bearerExcludedUrls: ['/assets', '/clients/public']
    });
}

export {initializeKeyCloak};
