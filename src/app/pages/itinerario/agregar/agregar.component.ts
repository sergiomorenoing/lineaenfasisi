import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {

  mensaje: string;

  constructor() { }

  ngOnInit(): void {
  }
  imprimir(){
    alert(this.mensaje),
    this.mensaje = "El Itinerario fue Regisrado con Exito!";
  }


}
