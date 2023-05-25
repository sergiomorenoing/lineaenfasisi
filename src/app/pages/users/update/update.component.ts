import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {


  empleados: any[]; // Declaración de la lista de empleados

  constructor(private router: Router) {
    // Inicialización de la lista de empleados con datos de ejemplo
    this.empleados = [
      { id: 1, nombre: 'Juan Jaramillo', celular: '3100000001', ciudad: 'Manizales', direccion: 'Calle 1', tipoEmpleado: 'Guia', fechaIngreso: '01/09/2019' },
      { id: 2, nombre: 'John Lopez', celular: '3100000002', ciudad: 'Manizales', direccion: 'Calle 2', tipoEmpleado: 'Cuidador', fechaIngreso: '15/11/2020' },
      { id: 3, nombre: 'David Castañeda', celular: '3100000003', ciudad: 'Manizales', direccion: 'Calle 3', tipoEmpleado: 'Cuidador', fechaIngreso: '01/06/2021' }
      // Agrega más empleados si es necesario
    ];
  }

  irAEditar(id: number) {
    console.log('El ID es ->',id);
    this.router.navigate(['/editar']);
  }


}
