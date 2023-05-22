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
  public listTipoVegetacion: [
    {id: 1, value:"One"},
    {id: 2, value:"Two"},
    {id: 3, value:"Three"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  add(){
    alert(this.nombre + this.clima + this.tipoVegetacion);
  }

}
