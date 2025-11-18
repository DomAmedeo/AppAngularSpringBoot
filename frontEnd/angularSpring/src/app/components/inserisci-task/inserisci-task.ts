import { Component } from '@angular/core';
import { TaskService } from '../../services/task-service';
import { Task } from '../../models/task';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inserisci-task',
  imports: [CommonModule, FormsModule],
  templateUrl: './inserisci-task.html',
  styleUrl: './inserisci-task.css',
})
export class InserisciTask {

  titolo?: string ;
  descrizione?: string;
  stato?: string ;

  constructor(private service : TaskService, private router: Router){}

  salva() : void{
    let tsk : Task={
      tito : this.titolo,
      desc :this.descrizione,
      stat :this.stato,
    }
    this.service.Inserisci(tsk).then(ris => {
      if(ris==true){
        alert("Task nserito correttamente");
        this.router.navigateByUrl("task/visualizza")
      }
      else(alert("errore"))
    })
  }

}
