import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItinerarioRoutingModule } from './itinerario-routing.module';
import { AgregarComponent } from './agregar/agregar.component';
import { FormsModule } from '@angular/forms';
import { ListarComponent } from './listar/listar.component';


@NgModule({
  declarations: [
    AgregarComponent,
    ListarComponent
  ],
  imports: [
    CommonModule,
    ItinerarioRoutingModule,
    FormsModule
  ]
})
export class ItinerarioModule { }
