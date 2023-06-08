import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { NbWindowService } from '@nebular/theme';
import { EditComponent } from './dialogs/edit/edit.component';
import { DataService } from '../../../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  listHabitats = [];

  constructor(private windowService: NbWindowService, public dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.listHabitats = this.dataService.habitats;
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
        this.dataService.habitats.splice(this.dataService.habitats.findIndex(x => x.id == item.id), 1);
        this.dataService.generarActualizacionLocalStorage("habitats",this.dataService.habitats);
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

  add() {
    this.router.navigate(['/pages/habitat/add'])
  }
}
