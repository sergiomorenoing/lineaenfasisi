import { Component, Inject, OnInit } from '@angular/core';
import { NbWindowRef, NB_WINDOW_CONTENT } from '@nebular/theme';
import { DataService } from '../../../../../service/data.service';

@Component({
  selector: 'ngx-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  data: any;
  nombre: string;
  clima: string;
  tipoVegetacion: any;
  habitatEdit: any;

  constructor(@Inject(NB_WINDOW_CONTENT) private item, protected windowRef: NbWindowRef, public dataService: DataService) {
  }

  ngOnInit(): void {
    this.data = this.item;
    this.nombre = this.data.nombre;
    this.clima = this.data.clima;
    this.tipoVegetacion = this.data.idTipoVegetacion;
  }

  edit() {
    this.habitatEdit = {
      id: this.data.id,
      clima: this.clima,
      idTipoVegetacion: this.tipoVegetacion,
      nombre: this.nombre,
      tipoVegetacion: this.dataService.tipoVegetacion.find(x => x.id == this.tipoVegetacion).value
    }

    this.dataService.habitats[this.dataService.habitats.findIndex(x => x.id == this.data.id)] = this.habitatEdit;
    this.dataService.generarActualizacionLocalStorage("habitats", this.dataService.habitats);

    this.windowRef.close();
  }

}
