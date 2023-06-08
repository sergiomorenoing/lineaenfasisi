import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DataService } from '../../../service/data.service';
import { NbWindowService } from '@nebular/theme';


@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  codigo:string
  fecha_inicio: string
  hora_inicio:string
  fecha_final:string
  hora_final:string
  longitud:string
  visitantes:string
  guia:string
  itinerario_edit:any;

  listitinerarios = [];

  constructor(private windowService: NbWindowService, public dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.listitinerarios = this.dataService.intinerarios;
  }

  delete(item) {
    Swal.fire({
      title: 'Eliminar itinerario?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.dataService.intinerarios.splice(this.dataService.intinerarios.findIndex(x => x.codigo == item.id), 1);
        this.dataService.generarActualizacionLocalStorage("itinerarios",this.dataService.intinerarios);
        Swal.fire(
          'Eliminado!',
          '',
          'success'
        )
      }
    });
  }

  edit(item: any) {
    const queryParams = {
      codigo: item.codigo,
      fecha_inicio: item.fecha_inicio,
      hora_inicio: item.hora_inicio,
      fecha_final: item.fecha_final,
      hora_final: item.hora_final,
      longitud: item.longitud,
      visitantes: item.visitantes,
      guia: item.guia
    };

    this.router.navigate(['/pages/itinerario/agregar'], { queryParams });
  }

  add() {
    this.router.navigate(['/pages/itinerario/agregar'])
  }
}
