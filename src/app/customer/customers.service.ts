import { Injectable } from '@angular/core';
import { Details } from './details.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  detailsModel:Details;
  list:Details[];
  
  
  constructor(private http_:HttpClient) { }

  getemps() {
    //MUST use 
    // .toPromise().then( data => this.list = data as Employee[])
    //  for auto REFRESH IN DISPLAY table
    
    return this.http_.get(environment.apiBaseUrl)
            .toPromise().then( data => this.list = data as Details[]);

  }
  getempdetails(){
    return this.http_.get(environment.apiBaseUrl);

  }

}
