package spring.angular.primaprova.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import spring.angular.primaprova.Repositories.TaskRepository;
import spring.angular.primaprova.models.Task;

@RestController
@RequestMapping("api/task")
public class TaskController {
    @Autowired
    private TaskRepository repo;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping()
    public List<Task> tuttiTasks(){
        return repo.findAll();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/{varId}")
    public Task singoloTask(@PathVariable Integer varId){
        return repo.findById(varId).orElse(null);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping()
    public Task inserisciTask(@RequestBody Task t){
        return repo.save(t);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/{varId}")
    public String eliminaTask(@PathVariable Integer varId){
        repo.deleteById(varId);
        return "Task eliminato";
    }
  

}
