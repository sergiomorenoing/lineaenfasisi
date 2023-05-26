import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZonasRoutingModule } from './zonas-routing.module';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    ZonasRoutingModule,
    FormsModule
  ]
})
export class ZonasModule { }
