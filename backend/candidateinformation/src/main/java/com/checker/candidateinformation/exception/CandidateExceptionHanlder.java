package com.checker.candidateinformation.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class CandidateExceptionHanlder {

    @ExceptionHandler(value = {CandidateNotFoundException.class})
    public ResponseEntity<Object> handleCandidateExceptionNotFound(CandidateNotFoundException candidateNotFoundException){

        CandidateException candidateException = new CandidateException(candidateNotFoundException.getMessage(), HttpStatus.NOT_FOUND);

        return new ResponseEntity<>(candidateException,HttpStatus.NOT_FOUND);
    }
}
