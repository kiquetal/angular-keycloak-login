package me.cresterida;
import io.quarkus.logging.Log;
import io.quarkus.security.AuthenticationCompletionException;
import io.quarkus.security.UnauthorizedException;
import jakarta.annotation.Priority;
import jakarta.ws.rs.Priorities;
import jakarta.ws.rs.container.ContainerRequestContext;
import jakarta.ws.rs.container.ContainerRequestFilter;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.ext.ExceptionMapper;
import jakarta.ws.rs.ext.Provider;

import java.io.IOException;
import java.util.logging.Logger;


@Provider

public class ExceptionNonHeader implements ExceptionMapper<UnauthorizedException>
{

    @Override
    public Response toResponse(UnauthorizedException e)
    {
        Log.info("ExceptionNonHeader: " + e.toString());
        ErrorResponse response = new ErrorResponse();
        response.error = "UnauthorizedException";
        response.message = e.getMessage();
        return Response.status(Response.Status.UNAUTHORIZED).entity(response)
                .type(MediaType.APPLICATION_JSON_TYPE)
                .build();
    }
    private class ErrorResponse {
        public String error;
        public String message;
    }
}
