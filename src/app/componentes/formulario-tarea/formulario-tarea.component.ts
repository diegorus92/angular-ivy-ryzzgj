import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ITarea } from 'src/app/Interfaces/ITarea';
import { TareaService } from 'src/app/servicios/tarea.service';

@Component({
  selector: 'app-formulario-tarea',
  templateUrl: './formulario-tarea.component.html',
  styleUrls: ['./formulario-tarea.component.css']
})
export class FormularioTareaComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private servicioTareas: TareaService,
    ) { }


  tareaActual?: ITarea;

  formulario:FormGroup = this.formBuilder.group({
    descripcion: ['',[Validators.required]],
    dia: ['',[Validators.required]],
    recordatorio:[false,[]],
  });

  ngOnInit(): void {
  }

  get Descripcion(){
    return this.formulario.get('descripcion');
  }

  get Fecha(){
    return this.formulario.get('dia');
  }

  agregarTarea(tarea:ITarea){
    this.servicioTareas.agregarTarea(tarea).subscribe();
  }

  onEnviar(evento:Event):void{
    evento.preventDefault;

    if(this.formulario.valid){
      console.log("formulario valido!");
      console.log('captado por el formulario:',this.formulario.value);
      this.agregarTarea(this.formulario.value as ITarea);
      this.formulario.reset();
    }
    else{
      alert("formulario invalido :(");
      this.formulario.markAllAsTouched();
    }
  }

}
