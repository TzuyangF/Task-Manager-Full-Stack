package com.tzuyang.fullstack_backend.repository;

import com.tzuyang.fullstack_backend.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task,Long> {
}
