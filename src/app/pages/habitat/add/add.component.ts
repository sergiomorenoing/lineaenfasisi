import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  nombre: string;
  clima: string;
  tipoVegetacion: string;
  listTipoVegetacion: [
    {id: 1, value:"Bosque Templado"},
    {id: 2, value:"Selva Húmeda"},
    {id: 3, value:"Manglar"}
  ];

  constructor() { }

  ngOnInit(): void {
    this.tipoVegetacion = "";
  }

  add(){
    alert(this.nombre + this.clima + this.tipoVegetacion);
  }

}
