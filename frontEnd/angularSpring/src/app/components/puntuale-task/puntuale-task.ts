import { Component } from '@angular/core';
import { TaskService } from '../../services/task-service';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../../models/task';

@Component({
  selector: 'app-puntuale-task',
  imports: [],
  templateUrl: './puntuale-task.html',
  styleUrl: './puntuale-task.css',
})
export class PuntualeTask {

  id?: number;
  titolo?: string;
  descrizione?: string;
  stato?: string;


  
  constructor(private service: TaskService, private rottAttiva: ActivatedRoute){}

  ngOnInit(){
    this.rottAttiva.params.subscribe(async (risultato)=>{
      const codice = risultato['codice'];
      if(codice && codice.trim && codice != 0){
        let task : Task| null= await this.service.Puntuale(codice);
        if(task){
          this.id= task.id;
          this.titolo = task.tito;
          this.descrizione = task.desc;
          this.stato= task.stat;
        }
      }
    });

  }
}
