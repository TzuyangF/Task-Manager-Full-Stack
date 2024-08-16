package com.tzuyang.fullstack_backend.controller;


import com.tzuyang.fullstack_backend.exception.TaskNotFoundException;
import com.tzuyang.fullstack_backend.model.Task;
import com.tzuyang.fullstack_backend.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class TaskController {
    @Autowired
    private TaskRepository taskRepository;

    @PostMapping("/task")
    Task newTask(@RequestBody Task newTask){
        return taskRepository.save(newTask);
    }

    @GetMapping("/tasks")
    List<Task> getAllTasks(){
        return taskRepository.findAll();
    }

    @GetMapping("/task/{id}")
    Task getTaskById(@PathVariable Long id){
        return taskRepository.findById(id)
                .orElseThrow(()->new TaskNotFoundException(id));
    }

    @PutMapping("/task/{id}")
    Task updateTask(@RequestBody Task newTask, @PathVariable Long id){
        return taskRepository.findById(id)
                .map(task -> {
                    task.setTaskname(newTask.getTaskname());
                    task.setDeadline(newTask.getDeadline());
                    task.setStatus(newTask.getStatus());
                    return taskRepository.save(task);
                }).orElseThrow(()-> new TaskNotFoundException(id));
    }

    @DeleteMapping("/task/{id}")
    String deleteTask(@PathVariable Long id){
        if(!taskRepository.existsById(id)){
            throw new TaskNotFoundException(id);
        }
        taskRepository.deleteById(id);
        return "Task id " + id + "has been deleted.";
    }
}
