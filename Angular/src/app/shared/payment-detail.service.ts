import { PaymentDetail } from './payment-detail.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  formData:PaymentDetail;
  readonly rootURL = "http://localhost:57166/api";

  constructor(private http:HttpClient) { }

  postPaymentDetail(formData:PaymentDetail){    
    console.log(formData);
    var request = this.http.post(this.rootURL + "/PaymentDetail",formData);
    //console.log(request);
    return request;
  }
}
