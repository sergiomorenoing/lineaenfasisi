import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HabitatRoutingModule } from './habitat-routing.module';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    HabitatRoutingModule,
    FormsModule
  ]
})
export class HabitatModule { }
