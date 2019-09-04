import { Component, OnInit } from '@angular/core';
import { CustomersService } from './customers.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private detailsService_:CustomersService) { }

  ngOnInit() {
    // this.detailsService_
    // this.detailsService_.getdetails();
    this.detailsService_.getemps();
    
  }

}
