import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton-agregar',
  templateUrl: './boton-agregar.component.html',
  styleUrls: ['./boton-agregar.component.css']
})
export class BotonAgregarComponent implements OnInit {

  abierto:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect():boolean{
    this.abierto = !this.abierto;
    console.log("Click!: ",this.abierto);
    return this.abierto;
  }

}

