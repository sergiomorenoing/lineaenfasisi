import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../../service/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit, OnDestroy {
  codigo: string;
  fecha_inicio: string;
  hora_inicio: string;
  fecha_final: string;
  hora_final: string;
  longitud: string;
  visitantes: string;
  guia: string;
  itinerario: any;

  constructor(
    public dataService: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this.dataService.itinerarioActual) {
      this.itinerario = JSON.parse(JSON.stringify(this.dataService.itinerarioActual));
    }
    this.activatedRoute.queryParams.subscribe(params => {
      this.codigo = params.codigo;
      this.fecha_inicio = params.fecha_inicio;
      this.hora_inicio = params.hora_inicio;
      this.fecha_final = params.fecha_final;
      this.hora_final = params.hora_final;
      this.longitud = params.longitud;
      this.visitantes = params.visitantes;
      this.guia = params.guia;

      // Verificar si se proporcionó un código válido
      if (this.codigo) {
        // Buscar el elemento correspondiente en la lista de itinerarios
        const itinerarioEncontrado = this.dataService.intinerarios.find(
          item => item.codigo === this.codigo
        );

        // Verificar si se encontró el itinerario
        if (itinerarioEncontrado) {
          // Copiar el itinerario encontrado para editar
          this.itinerario = { ...itinerarioEncontrado };
        } else {
          // Si no se encontró el itinerario, redirigir a la lista de itinerarios
          this.router.navigate(['/pages/itinerario/listar']);
        }
      } else {
        // Si no se proporcionó un código válido, redirigir a la lista de itinerarios
        this.router.navigate(['/pages/itinerario/listar']);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.dataService.itinerarioActual) {
      this.dataService.itinerarioActual = null;
      this.dataService.itinerarioActualPos = null;
    }
  }

  guardar(): void {
    if (this.itinerario) {
      // Realizar las modificaciones en el itinerario existente
      this.itinerario.fecha_inicio = this.fecha_inicio;
      this.itinerario.hora_inicio = this.hora_inicio;
      this.itinerario.fecha_final = this.fecha_final;
      this.itinerario.hora_final = this.hora_final;
      this.itinerario.longitud = this.longitud;
      this.itinerario.visitantes = this.visitantes;
      this.itinerario.guia = this.guia;

      // Guardar los cambios en la lista de itinerarios
      const index = this.dataService.intinerarios.findIndex(
        item => item.codigo === this.itinerario.codigo
      );
      if (index !== -1) {
        this.dataService.intinerarios[index] = { ...this.itinerario };
        this.dataService.generarActualizacionLocalStorage(
          'itinerarios',
          this.dataService.intinerarios
        );
      }
    } else {
      // Crear un nuevo itinerario
      this.itinerario = {
        codigo: this.codigo,
        fecha_inicio: this.fecha_inicio,
        hora_inicio: this.hora_inicio,
        fecha_final: this.fecha_final,
        hora_final: this.hora_final,
        longitud: this.longitud,
        visitantes: this.visitantes,
        guia: this.guia
      };

      // Agregar el nuevo itinerario a la lista
      this.dataService.intinerarios.push(this.itinerario);
      this.dataService.generarActualizacionLocalStorage(
        'itinerarios',
        this.dataService.intinerarios
      );
    }

    // Navegar a la lista de itinerarios
    this.router.navigate(['/pages/itinerario/listar']);
  }
}
