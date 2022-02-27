import { ListallComponent } from './listall/listall.component';
import { CreateComponent } from './create/create.component';
import { UsersComponent } from './users.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { DetailsComponent } from './details/details.component';

const routes:Routes =[
  {path:'', component:UsersComponent},
  {path:'create', component:CreateComponent},
  {path:'update', component:UpdateComponent},
  {path:'listall', component:ListallComponent},
  {path:'delete', component:DeleteComponent},
  {path:'details', component:DetailsComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class UserRoutingModule { }
