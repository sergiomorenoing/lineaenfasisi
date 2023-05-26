import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './update/update.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    AddComponent,
    UpdateComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule
  ]
})
export class UsersModule { }
