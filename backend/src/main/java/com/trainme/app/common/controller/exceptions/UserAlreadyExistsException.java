package com.trainme.app.common.controller.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.CONFLICT, reason = "Already exists")
public class UserAlreadyExistsException extends RuntimeException {
    public UserAlreadyExistsException() {
        super("Already exists");
    }
}
