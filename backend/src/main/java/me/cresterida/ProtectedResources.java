package me.cresterida;

import io.quarkus.security.Authenticated;
import jakarta.annotation.security.RolesAllowed;
import jakarta.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.core.SecurityContext;
import org.eclipse.microprofile.jwt.JsonWebToken;

@Path("/protected")
@Authenticated
public class ProtectedResources {

    @Inject
    SecurityContext securityContext;

    @Inject
    JsonWebToken jwt;
    @RolesAllowed("default-roles-phoenix")
    @GET
    public String getProtectedResource() {


        return "This is a protected resource, welcome " + securityContext.getUserPrincipal().getName() + " with roles :" + jwt.getClaim("resource_access");
    }
}
