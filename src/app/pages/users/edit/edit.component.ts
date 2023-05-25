import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'ngx-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  id: number;
  empleado: any = {}; // Aquí debes tener la estructura de datos correspondiente a un empleado

  empleados = [
    { id: 1, nombre: 'Juan Jaramillo', celular: '3100000001', ciudad: 'Manizales', direccion: 'Calle 1', tipoEmpleado: 'Guia', fechaIngreso: '01/09/2019' },
    { id: 2, nombre: 'John Lopez', celular: '3100000002', ciudad: 'Manizales', direccion: 'Calle 2', tipoEmpleado: 'Cuidador', fechaIngreso: '15/11/2020' },
    { id: 3, nombre: 'David Castañeda', celular: '3100000003', ciudad: 'Manizales', direccion: 'Calle 3', tipoEmpleado: 'Cuidador', fechaIngreso: '01/06/2021' }
    // Agrega más empleados si es necesario
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(){
    // this.route.paramMap.subscribe((params: ParamMap) => {
    //   this.id = +params.get('id');
    console.log("Entra a editar")
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

    this.empleado = this.empleados.find(emp => emp.id === this.id)


  }

  guardarCambios() {
    // Aquí puedes implementar la lógica para guardar los cambios realizados en el empleado
    // Por ejemplo, puedes buscar el empleado en el array empleados y actualizar sus propiedades
    
    for (let i = 0; i < this.empleados.length; i++) {
      if (this.empleados[i].id === this.empleado.id) {
        // Actualizar las propiedades del empleado
        this.empleados[i].nombre = this.empleado.nombre;
        this.empleados[i].celular = this.empleado.celular;
        this.empleados[i].ciudad = this.empleado.ciudad;
        this.empleados[i].direccion = this.empleado.direccion;
        this.empleados[i].tipoEmpleado = this.empleado.tipoEmpleado;
        this.empleados[i].fechaIngreso = this.empleado.fechaIngreso;
        
        break; // Terminar el bucle una vez que se actualice el empleado
      }
    }
    
    console.log('Empleados actualizados:', this.empleados);
    
  }
  

}
