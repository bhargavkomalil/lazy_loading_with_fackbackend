import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';


const routes: Routes = [
  {path:'',component:CustomerComponent,children:[
                                  {path:'',component:CustomerListComponent},
                                  {path:':id/detail',component:CustomerDetailsComponent}
  ]},
  // {path:'',component:CustomerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }


