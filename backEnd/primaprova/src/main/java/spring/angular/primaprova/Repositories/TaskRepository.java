package spring.angular.primaprova.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import spring.angular.primaprova.models.Task;

@Repository
public interface TaskRepository extends JpaRepository <Task, Integer>{

}
