import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './componentes/about/about.component';
import { AppComponent } from './app.component';
import { ListaTareasComponent } from './componentes/lista-tareas/lista-tareas.component';
import { Error404Component } from './componentes/error404/error404.component';

const routes:Routes= [
  {path:'', redirectTo: '/inicio', pathMatch:'full'},
  {path:'inicio', component:ListaTareasComponent},
  {path:'about', component:AboutComponent},
  {path:'**', component:Error404Component}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
