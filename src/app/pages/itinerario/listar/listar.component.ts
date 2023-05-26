import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  mensaje: string;

  constructor() { }

  ngOnInit(): void {
  }
  agregar(){
    alert(this.mensaje),
    this.mensaje = "El Itinerario fue Regisrado con Exito!";
    
    const codigo = (<HTMLInputElement>document.getElementById('inputCodigo')).value;
    const estado = (<HTMLSelectElement>document.getElementById('inputState')).value;
    const fechaInicio = (<HTMLInputElement>document.getElementById('fecha_inicio')).value;
    const horaInicio = (<HTMLInputElement>document.getElementById('hora_inicio')).value;
    const fechaFinal = (<HTMLInputElement>document.getElementById('fecha_final')).value;
    const horaFinal = (<HTMLInputElement>document.getElementById('hora_final')).value;
    const longitud = (<HTMLInputElement>document.getElementById('inputLongitud')).value;
    const visitantes = (<HTMLInputElement>document.getElementById('inputVisitantes')).value;
    const guia = (<HTMLInputElement>document.getElementById('inputGuia')).value;
    
    const datos = {
      codigo: codigo,
      estado: estado,
      fechaInicio: fechaInicio,
      horaInicio: horaInicio,
      fechaFinal: fechaFinal,
      horaFinal: horaFinal,
      longitud: longitud,
      visitantes: visitantes,
      guia: guia
    };
    
    // Obtener los datos almacenados en localStorage o crear una nueva matriz vacía
    let datosFormulario = JSON.parse(localStorage.getItem('datosFormulario')) || [];
    // Agregar los nuevos datos al final de la matriz
    datosFormulario.push(datos);
    // Almacenar la matriz actualizada en localStorage
    localStorage.setItem('datosFormulario', JSON.stringify(datosFormulario));
    
    // Limpiar los campos del formulario después de agregar los datos
    (<HTMLInputElement>document.getElementById('inputCodigo')).value = '';
    (<HTMLSelectElement>document.getElementById('inputState')).value = 'Activo';
    (<HTMLInputElement>document.getElementById('fecha_inicio')).value = '';
    (<HTMLInputElement>document.getElementById('hora_inicio')).value = '';
    (<HTMLInputElement>document.getElementById('fecha_final')).value = '';
    (<HTMLInputElement>document.getElementById('hora_final')).value = '';
    (<HTMLInputElement>document.getElementById('inputLongitud')).value = '';
    (<HTMLInputElement>document.getElementById('inputVisitantes')).value = '';
    (<HTMLInputElement>document.getElementById('inputGuia')).value = '';
    
    // Mostrar el mensaje de éxito
    this.mensaje = 'El itinerario se ha guardado correctamente.';
    }
  }


