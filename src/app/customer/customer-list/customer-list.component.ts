import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../customers.service';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor( private detailsService_:CustomersService) { }

  ngOnInit() {
    this.detailsService_.getemps();
    
  }

}
