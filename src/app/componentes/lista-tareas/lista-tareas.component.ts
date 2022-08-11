import { Component, OnInit } from '@angular/core';
import { TAREAS } from '../../MockTareas';
import { ITarea } from 'src/app/Interfaces/ITarea';
import { TareaService } from "../../servicios/tarea.service";
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {

  tareas:ITarea[] = []; //Almacena las tareas recuperadas de la DB mediante el TareaService
  
  constructor(private servicioTareas:TareaService) { }
  

  ngOnInit(): void {
    //this.getTareas();
    
    this.servicioTareas.getTareas()   //Se suscribe al obserbavle getTareas() que recupera asincronicamente
                                      //las tareas de la DB
    .subscribe((tareas) => {  //Dentro del subscribe, recupera las tareas de la DB y:
      this.ordenarTareas(tareas); // Ordeno la lista de tareas recibidas en función de su campo "orden"
      this.tareas = tareas;   //-las almacena en la lista tareas de esta clase...
      this.servicioTareas.tareas = this.tareas; //-copia la lista tareas de esta clase a la lista tareas de la del servicio...
      this.servicioTareas.actualizarSubject();//-ejectuta la funcion del servicio que actualiza la ListaTareas del mismo con el contenido de su lista tareas del mismo cargada en la linea anterior...
      console.log("lista-tareas:",tareas);

      this.servicioTareas.ListaTarea$.subscribe(tareas => this.servicioTareas.tareas = tareas);//-finalmente nos subscribimos a ListaTarea$ que nos actualiza asincronicamente los cambios en el listado de tareas
                                      //Por si a caso en el subscribe volvemos a copiar las tareas de la lista tareas de esta clase a la lista tareas del servicio
    })                                                                      
  }

  /*getTareas():void{
    this.tareas = this.servicioTareas.Tareas;
  }*/

  private ordenarTareas(tareas:ITarea[]):void{
    tareas.sort((a:ITarea, b:ITarea) =>{
      if(a.orden > b.orden) return 1;
      if(a.orden < b.orden) return -1;
      return 0;
    })
  }

  modificarRecordatorio(tarea:ITarea):void{
    tarea.recordatorio = !tarea.recordatorio;
    this.servicioTareas.modificarTarea(tarea).subscribe();
  }

  drop(event: CdkDragDrop<ITarea[]>){
    moveItemInArray(this.tareas, event.previousIndex, event.currentIndex);
    console.log("Ejecutado Drag&Drop: ",this.tareas);
    
    // Renumero el orden
    for(var i=0; i<this.tareas.length; i++){
      this.tareas[i].orden = i;
      this.servicioTareas.modificarTarea(this.tareas[i]).subscribe();
    }
  }

}
