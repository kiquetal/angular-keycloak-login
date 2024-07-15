package me.cresterida;


import com.fasterxml.jackson.annotation.JsonProperty;
import io.quarkus.security.AuthenticationFailedException;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.ext.ExceptionMapper;
import jakarta.ws.rs.ext.Provider;


@Provider
public class ExceptionOidc implements ExceptionMapper<AuthenticationFailedException>
{
    @Override
    public Response toResponse(AuthenticationFailedException exception) {
        System.out.println("ExceptionOidc: " + exception.toString());

        ErrorResponse response = new ErrorResponse();
        response.error = "AuthenticationFailedException";
        response.message = exception.getMessage();
        return Response.status(Response.Status.UNAUTHORIZED).entity(response)
                .type(MediaType.APPLICATION_JSON_TYPE)
                .build();
    }
    private static class ErrorResponse {
        @JsonProperty
        public String error;
       @JsonProperty
        public String message;

    }
}
