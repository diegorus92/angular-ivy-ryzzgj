import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TareaComponent } from './componentes/tarea/tarea.component';
import { BotonAgregarComponent } from './componentes/boton-agregar/boton-agregar.component';
import { ListaTareasComponent } from './componentes/lista-tareas/lista-tareas.component';
import { FormularioTareaComponent } from './componentes/formulario-tarea/formulario-tarea.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './componentes/about/about.component';
import { Error404Component } from './componentes/error404/error404.component';

import {DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    AppComponent,
    TareaComponent,
    BotonAgregarComponent,
    ListaTareasComponent,
    FormularioTareaComponent,
    AboutComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule, 
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
