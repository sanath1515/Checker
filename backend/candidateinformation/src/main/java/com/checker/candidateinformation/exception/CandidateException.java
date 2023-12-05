package com.checker.candidateinformation.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;

@AllArgsConstructor
@Getter
@Setter
public class CandidateException {
    private final String messsage;
    private final HttpStatus httpStatus;
}
