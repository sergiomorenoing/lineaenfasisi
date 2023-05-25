import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'ngx-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})


export class AddComponent {
  empleados: any[]; // Declaración de la lista de empleados
  //Declaración de variables que van en la lista de empleados
  nombre: string = ''; // Variable para el nombre
  telefono: string = ''; // Variable para el teléfono
  ciudad: string = ''; // Variable para la ciudad
  direccion: string = ''; // Variable para la dirección
  tipoEmpleado: string = ''; // Variable para el tipo de empleado
  fechaIngreso: string;


  constructor() {
    // Inicialización de la lista de empleados con datos de ejemplo
    this.empleados = [
      { id: 1, nombre: 'Juan Jaramillo', telefono: '3100000001', ciudad: 'Manizales', direccion: 'Calle 1', tipoEmpleado: 'Guia', fechaIngreso: '2019-09-01' },
      { id: 2, nombre: 'John Lopez', telefono: '3100000002', ciudad: 'Manizales', direccion: 'Calle 2', tipoEmpleado: 'Cuidador', fechaIngreso: '2020-11-15' },
      { id: 3, nombre: 'David Castañeda', telefono: '3100000003', ciudad: 'Manizales', direccion: 'Calle 3', tipoEmpleado: 'Cuidador', fechaIngreso: '2021-06-01' }
      // Agrega más empleados si es necesario
    ];
    console.log(this.empleados);
  }



  agregarEmpleado() {
    // Obtener los valores ingresados en los campos del formulario
    console.log(this.empleados);
    let nuevoEmpleado = {
      id: this.empleados.length + 1, // Generar un nuevo ID (puedes adaptar esto según tu necesidad)
      nombre: this.nombre,
      telefono: this.telefono,
      ciudad: this.ciudad,
      direccion: this.direccion,
      tipoEmpleado: this.tipoEmpleado,
      fechaIngreso: this.fechaIngreso
    };

    // Agregar el nuevo empleado a la lista
    this.empleados.push(nuevoEmpleado);

    console.log(this.empleados);

    // Reiniciar los valores de los campos del formulario
    this.nombre = '';
    this.telefono = '';
    this.ciudad = '';
    this.direccion = '';
    this.tipoEmpleado = '';
    this.fechaIngreso = '';
  }

}
