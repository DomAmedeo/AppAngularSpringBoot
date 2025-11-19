import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {

  async Elenca(): Promise<Task[]>{
    try{
      const risultato = (await fetch('http://localhost:8080/api/task')).json();
      return risultato;
    }catch(errore){
      console.log("errore"+ errore)
    }
    return [];
  }

  async Puntuale(codice: number): Promise<Task | null>{
    try{
      const risposta = (await fetch('http://localhost:8080/api/task/'+ codice)).json();
      return risposta;
    }catch(errore){
      console.log("errore"+ errore)
    }
    return null;
  }


  async Inserisci(task: Task): Promise<boolean>{
    try{
      const inserisci = (await fetch("http://localhost:8080/api/task",
        {
          headers: { "Content-Type": "application/json" },
          method: 'Post',
          body: JSON.stringify(task)
        })).json(); 
        return true;
    }catch(errore){
      console.log("errore"+ errore)
    }
    return false;
  }


  async Eliminazione(codice: number): Promise<boolean> {
    try{
      const response = await (await fetch('http://localhost:8080/api/task/' + codice, {
        method: 'DELETE'
      })).json();
      return true;
      
      // if(!response.ok){
      //   console.log("ERRORE HTTP");
      //   return false
      // }

      // const risultato : Task = await response.json();
      // if(risultato)
      //   return true;
    }catch(errore){
      console.log("errore"+ errore)
    } 
    return false;  
  }
  
  
  async ModificaService(task: Task): Promise<boolean> {
    try{
      const varcodice = task.id;
      const response = (await fetch("http://localhost:8080/api/task/" + task.id, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
      })).json();
      return true;
    }catch(error){
      console.log("ERRORE" + error)
    }
    return false;
  }
  
}
