package com.gurunath.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ProductNotFoundException.class)
    public ResponseEntity<Map<String,String>> handleProductNotFoundException(ProductNotFoundException e){
        Map<String ,String> map=new HashMap<>();
        map.put("ErrorMessage",e.getMessage());
        return ResponseEntity.internalServerError().body(map);
    }
}
