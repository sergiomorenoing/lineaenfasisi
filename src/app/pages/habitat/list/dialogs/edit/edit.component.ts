import { Component, Inject, OnInit } from '@angular/core';
import { NB_WINDOW_CONTENT } from '@nebular/theme';

@Component({
  selector: 'ngx-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  data: any;
  nombre: string;
  clima: string;
  tipoVegetacion: string;

  constructor(@Inject(NB_WINDOW_CONTENT) private item) {
  }

  ngOnInit(): void {
    this.data = this.item;
    this.nombre = this.data.nombre;
    this.clima = this.data.clima;
    this.tipoVegetacion = this.data.idTipoVegetacion;
  }

}
