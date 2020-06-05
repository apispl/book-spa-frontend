import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {OrderRequest} from "../OrderRequest";

@Injectable({
  providedIn: 'root'
})
export class SpaService {
  private baseUrl: string;

  constructor(private httpClient:HttpClient) {
    this.baseUrl = 'https://book-spa-backend.herokuapp.com/'
  }

  public getRequestList(): Observable<OrderRequest[]>{
    return this.httpClient.get<OrderRequest[]>(this.baseUrl + "/spa");
  }

  public placeOrder(orderRequest: OrderRequest){
    return this.httpClient.post<OrderRequest>(this.baseUrl + "/spa", orderRequest);
  }

  public getHours(): Observable<string[]>{
    return this.httpClient.get<string[]>(this.baseUrl + "/spa/hours");
  }

  public getServices(): Observable<string[]>{
    return this.httpClient.get<string[]>(this.baseUrl + "/spa/services")
  }

  public delete(){
    return this.httpClient.delete<void>(this.baseUrl + "/spa");
  }

}
