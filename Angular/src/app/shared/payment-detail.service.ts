import { PaymentDetail } from './payment-detail.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  formData:PaymentDetail;
  readonly rootURL = "http://localhost:57166/api";
  list : PaymentDetail[];

  constructor(private http:HttpClient) { }

  postPaymentDetail(){    
    console.log(this.formData);
    var request = this.http.post(this.rootURL + "/PaymentDetail", this.formData);
    //console.log(request);
    return request;
  }
  putPaymentDetail(){    
    console.log(this.formData);
    var request = this.http.put(this.rootURL + "/PaymentDetail/" + this.formData.PMId, this.formData);
    //console.log(request);
    return request;
  }
  deletePaymentDetail(id){    
    console.log(this.formData);
    var request = this.http.delete(this.rootURL + "/PaymentDetail/" + id);
    //console.log(request);
    return request;
  }

  refreshList(){
    this.http.get(this.rootURL + "/PaymentDetail")
    .toPromise()
    .then(res => this.list = res as PaymentDetail[]);
  }
}
