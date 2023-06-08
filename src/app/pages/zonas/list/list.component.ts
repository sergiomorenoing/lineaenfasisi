import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../service/data.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  bienvenida:string = "Usuario";

  zona_actual:string = "";

  especies:string = "";

  extension:string = "";

  index_actual:any;

  zona_actual_objeto:any;
  constructor(public dataService:DataService,private router:Router) { }

  ngOnInit(): void {
  }

  cambiarZona(value) {

    this.index_actual = value;

    if (value != "-" ) {

      this.zona_actual = this.dataService.zonas[value].nombre + " -  ID " + this.dataService.zonas[value].id;

      this.especies = this.dataService.zonas[value].especies;

      this.extension = this.dataService.zonas[value].extension;

      this.zona_actual_objeto = this.dataService.zonas[value];
    }

    else {

      this.zona_actual = "";

      this.especies = "";

      this.extension = "";

      this.zona_actual_objeto = null;

    }

  }

  actualizar(){
    Swal.fire({
      title: 'Desea actualizar la zona?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Actualizar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      this.dataService.zonaActual = this.zona_actual_objeto;
    this.dataService.zonaActualPos = this.index_actual;
    this.router.navigate(['pages/zonas/create']);

    });



  }

  eliminar(){
    Swal.fire({
      title: 'Eliminar Zona?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {

        this.dataService.zonas.splice(this.index_actual,1);


        this.index_actual = null;

        this.zona_actual = "";

        this.especies = "";

        this.extension = "";

        this.zona_actual_objeto = null;

        this.dataService.generarActualizacionLocalStorage("zonas",this.dataService.zonas);

        Swal.fire(
          'Eliminado!',
          '',
          'success'
        )
      }
    });
  }



}
