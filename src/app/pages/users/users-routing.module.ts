import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [

  {

    path:'add',
    component:AddComponent

  },
  {

    path:'update',
    component:UpdateComponent

  },
  {

    path:'edit/:id',
    component:EditComponent

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
