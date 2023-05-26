import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  bienvenida:string = "Usuarrio";

  zona_actual:string = "";

  especies:string = "";

  extension:string = "";

  constructor() { }

  ngOnInit(): void {
  }

  cambiarZona(value) {
    this.zona_actual = value;
    
    if (value == "Zona 1") {
      this.especies = "Pinguino, Totuga, Tiburon";

      this.extension = "14,5km";
    } else if (value == "Zona 2") {
      this.especies = "Rinoceronte, Tigre, Cebra";

      this.extension = "44,0km";
    } else if (value == "Zona 3") {
      this.especies = "Aguila, Condor";

      this.extension = "60,9km";
    }
    
  }

}
