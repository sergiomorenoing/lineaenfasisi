import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../service/data.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'ngx-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  Id_Zona:string;
  NombreZona:string;
  Especies:string;
  Extension:string;
  zona_actual_objeto:any;

  constructor(public dataService:DataService,private router:Router) { }

  ngOnInit(): void {
    if (this.dataService.zonaActual){
      this.zona_actual_objeto = JSON.parse(JSON.stringify( this.dataService.zonaActual ));
    }
  }

  ngOnDestroy(){
    if (this.dataService.zonaActual){
      this.dataService.zonaActual = null;
      this.dataService.zonaActualPos = null;

    }
  }

  guardar(){
    Swal.fire({
      title: 'Desea actualizar la zona?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Actualizar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if(result.isConfirmed){
        if (this.dataService.zonaActual){

          this.zona_actual_objeto =
          {
            id: this.dataService.zonaActualPos,
            nombre: this.NombreZona,
            especies: this.Especies,
            extension: this.Extension,
          };

          this.dataService.zonas[this.dataService.zonaActualPos] = this.zona_actual_objeto;
          this.dataService.zonaActual = null;
          this.dataService.zonaActualPos = null;

        }  else {

          this.zona_actual_objeto =
          {
            id: (this.dataService.zonas.length).toString(),
            nombre: this.NombreZona,
            especies: this.Especies,
            extension: this.Extension,
          };

          this.dataService.zonas.push(this.zona_actual_objeto);
          // localStorage.setItem('usuarios',JSON.stringify(this.usuario));

        }

        this.dataService.generarActualizacionLocalStorage("zonas",this.dataService.zonas);

        this.router.navigate(['pages/zonas/list']);
        Swal.fire(
          'Guardado con éxito',
          '',
          'success'
        )
      }
    });

  }
}
