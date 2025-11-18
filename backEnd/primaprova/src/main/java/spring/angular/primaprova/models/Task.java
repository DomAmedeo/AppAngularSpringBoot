package spring.angular.primaprova.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Tasks")
public class Task {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name= "taskID")
    private Integer id;

    @Column(name= "titolo")
    private String tito;
    
    @Column(name= "descrizione")
    private String desc;

    @Column(name= "stato")
    private String stat;

    public Task(){}

    public Integer getId(){
        return id;
    }
    public String getTito (){
        return tito;
    }
    public String getDesc(){
        return desc;
    }
    public String getStat(){
        return stat;
    }

    public void setId(Integer nuovoId){
        this.id = nuovoId;
    }
    public void setTito(String titolo){
        this.tito = titolo;
    }
    public void setDesc(String descrizione){
        this.desc = descrizione;
    }

    public void setStat(String stato){
        this.stat = stato;
    }


    @Override
    public String toString(){
        return "Task [id= " +id+ ", Titolo=  "+ tito+", Descrizione= " + desc+ ", Stato= "+ stat +"]";
    }


}
