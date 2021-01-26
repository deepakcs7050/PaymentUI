import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  payemtnURL ="";
  constructor( private http:HttpClient) { }

  payement(data){
    data = JSON.stringify(data);
    return this.http.post<any>( this.payemtnURL,data);

  }
}
