import { Component, OnInit } from '@angular/core';
import {ParamMap,Router,ActivatedRoute} from '@angular/router';
import { CustomersService } from '../customers.service';


@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  customerRecord: any;

  constructor( private router_:ActivatedRoute,private customerService_:CustomersService) { }

  ngOnInit() {
    this.router_.params.subscribe(params =>{
      var Paramid = params['id'];
      // console.log('hi..paramid',Paramid)
      this.getDetails(Paramid);
      this.getCustomerid(Paramid);     
    });
  }

  listRecord:any;
  getDetails(Paramid){
      console.log('hi..paramid in get....',Paramid);
    this.customerService_.getempdetails().subscribe(listValues => {
    this.listRecord = listValues
     console.log('list in getdetails....',this.listRecord);

    //  it will work also as like filter for the service
    
    this.customerRecord = this.listRecord.filter(x =>x.id == Paramid)[0]
     console.log('customerRecord...',this.customerRecord);
   });
  }

  getCustomerid(Paramid){
      // this.customerRecord = this.listRecord.forEach(objcet => {

      //   console.log('objjjj',objcet)
        
      // });
      // console.log('list in getdetails,,',this.listRecord);
  }

// arrOfRecord:any;


}
