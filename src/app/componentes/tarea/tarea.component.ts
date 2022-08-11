import { Component, OnInit, Input } from '@angular/core';
import { faCoffee, faThList, faXmark } from '@fortawesome/free-solid-svg-icons';
import { TareaService } from 'src/app/servicios/tarea.service';

import { ITarea } from '../../Interfaces/ITarea';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {
  faCoffee = faXmark; 
  
  @Input() tarea:ITarea = {
    descripcion:"",
    dia:"",
    recordatorio: false,
    orden: 0
  };


  constructor(private servicioTarea:TareaService) { }

  ngOnInit(): void {
  }

  get Recordatorio(): boolean {
    return this.tarea.recordatorio;
  }

  eliminarTarea(): void {
    console.log("quiero eliminar ", this.tarea);
    this.servicioTarea.removerTarea(this.tarea).subscribe((tarea) => console.log("Tarea removida: ", this.tarea));
  }
}
