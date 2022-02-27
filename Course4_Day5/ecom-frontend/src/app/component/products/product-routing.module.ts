import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { ProductsComponent } from './products.component';


const routes:Routes = [
    {path:'', component:ProductsComponent},
    {path:'create', component:CreateComponent},
    {path:'update', component:UpdateComponent},
    {path:'details', component:DetailsComponent},
    {path:'listall', component:ListComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class ProductRoutingModule { }
