import { Component } from '@angular/core';
import { TaskService } from '../../services/task-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../../models/task';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modifica-task',
  imports: [FormsModule],
  templateUrl: './modifica-task.html',
  styleUrl: './modifica-task.css',
})
export class ModificaTask {

  id? : number;
  titolo? : string;
  descrizione? : string;
  stato? : string;
  

  constructor(private service: TaskService, private rottAttiva: ActivatedRoute, private router: Router){}

  ngOnInit(){
    this.rottAttiva.params.subscribe(async (ris) =>{
      const codice = ris['codice']
      if (codice && codice !== 0){
        let task : Task | null =  await this.service.Puntuale(codice);
        if(task){
          this.id = task.id;
          this.titolo = task.tito;
          this.descrizione= task.desc;
          this.stato = task.stat;          
        }
      }
    });
    this.service.Puntuale
  }

  Modifica() : void{
    let tsk: Task = {
      id: this.id,
      tito : this.titolo,
      desc: this.descrizione,
      stat : this.stato
    }
    this.service.ModificaService(tsk).then(ris =>{
      if(ris){
        alert("Modifica effettuata con successo");
        this.router.navigateByUrl("task/visualizza/"+this.id);
      }else{
        alert("ERRORE NELLA MODIFICA")
      }
    })
  }
}
