package com.tzuyang.fullstack_backend.exception;

public class TaskNotFoundException  extends RuntimeException{
    public TaskNotFoundException(Long id){
        super("Could not found the task " + id);
    }
}
