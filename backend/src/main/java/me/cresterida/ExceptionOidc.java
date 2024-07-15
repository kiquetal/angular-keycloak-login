package me.cresterida;

import io.quarkus.oidc.OIDCException;
import io.quarkus.security.AuthenticationFailedException;
import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.ext.ExceptionMapper;
import jakarta.ws.rs.ext.Provider;

import java.util.HashMap;
import java.util.Map;

@Provider
public class ExceptionOidc implements ExceptionMapper<AuthenticationFailedException>
{
    @Override
    public Response toResponse(AuthenticationFailedException exception) {
        System.out.println("ExceptionOidc: " + exception.toString());
        Map<String,String> response= new HashMap<>();
        response.put("error", "AuthenticationFailedException");

        return Response.status(Response.Status.UNAUTHORIZED).entity(response).build();
    }
}
