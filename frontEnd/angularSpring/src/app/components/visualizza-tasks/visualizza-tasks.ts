import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task-service';

@Component({
  selector: 'app-visualizza-tasks',
  imports: [CommonModule],
  templateUrl: './visualizza-tasks.html',
  styleUrl: './visualizza-tasks.css',
})
export class VisualizzaTasks {
  elenco: Task[]= new Array();

  constructor(private service: TaskService){}

  ngOnInit(){
    this.RefreshLista();
  }

  private RefreshLista(){
    this.service.Elenca().then(ris=>{
      this.elenco = ris;
    })
  }


  Elimina(varCodice: number | undefined ) : void{
    if(varCodice){
      this.service.Eliminazione(varCodice);
      alert("ELIMINAZIIOONE EFFETTUATA CON SUCCESO");
      this.RefreshLista();
    }
    else{
      alert("ERRORE CODICE NON PRESENTE")
    }
  }

  
}
