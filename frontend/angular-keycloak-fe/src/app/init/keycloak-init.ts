import {KeycloakService} from "keycloak-angular";

const  initializeKeyCloak = (keycloak: KeycloakService) => {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080/auth',
        realm: 'demo',
        clientId: 'angular-keycloak-fe'
      },
      initOptions: {
        onLoad: 'login-required',
        checkLoginIframe: false
      },
      enableBearerInterceptor: true,
      bearerExcludedUrls: ['/assets', '/clients/public']
    });
}

export {initializeKeyCloak};
