import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './agregar/agregar.component';
import { ListarComponent } from './listar/listar.component';

const routes: Routes = [
  {
    path: 'agregar',
    component: AgregarComponent
  },
  {
    path: 'listar',
    component: ListarComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItinerarioRoutingModule { }
