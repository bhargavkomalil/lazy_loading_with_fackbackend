import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule}from '@angular/common/http';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomersService } from './customers.service';


@NgModule({
  declarations: [CustomerComponent, CustomerDetailsComponent, CustomerListComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    HttpClientModule
  ],
  providers:[CustomersService]
})
export class CustomerModule { }
