import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { NbWindowService } from '@nebular/theme';
import { EditComponent } from './dialogs/edit/edit.component';
@Component({
  selector: 'ngx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  listHabitats = [];

  constructor(private windowService: NbWindowService) { }

  ngOnInit(): void {
    this.listHabitats = [
      { id: "1", nombre: "Aéreo", clima: "Tropical Húmedo", idTipoVegetacion: "1", tipoVegetacion: "Bosque templado" },
      { id: "2", nombre: "Terrestre", clima: "Mediterráneo", idTipoVegetacion: "2", tipoVegetacion: "Selva húmeda" },
      { id: "3", nombre: "Acuático", clima: "Oceánico", idTipoVegetacion: "3", tipoVegetacion: "Manglar" },
    ]
  }

  delete(item) {
    Swal.fire({
      title: 'Eliminar Habitat?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.listHabitats = this.listHabitats.filter(x => x.id != item.id);
        Swal.fire(
          'Eliminado!',
          '',
          'success'
        )
      }
    });
  }

  edit(item) {
    this.windowService.open(EditComponent,
      {
        title: `Habitat`,
        context: {
          item: item
        },
      }
    );
  }
}
