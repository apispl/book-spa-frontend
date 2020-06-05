import { Component, OnInit } from '@angular/core';
import {OrderRequest} from "../../OrderRequest";
import {SpaService} from "../../service/spa.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit{

  orderRequest: OrderRequest;
  options = ['Massage', 'Pedicure', 'Manicure', 'Body Peeling'];
  additionalOptions = ['Normal', 'Waitress and Wine', 'Candles and Incense'];
  time: string[];
  presentDate = new Date();
  date: string;

  constructor(private spaService: SpaService,
              private router: Router) {
    this.orderRequest = new OrderRequest();
  }

  ngOnInit(): void {
    this.spaService.getHours().subscribe(value => {
      this.time = value
    });
  }

  onSubmit(){
    this.orderRequest.date = this.showDate();
    this.spaService.placeOrder(this.orderRequest).subscribe(result =>{
      this.gotoUserList();
    });
  }

  gotoUserList() {
    this.router.navigate(['/order-request-list']);
  }

  showDate(): string{
    this.date = this.presentDate.getDay()
      + '.'
      + (this.presentDate.getMonth()+ 1)
      + '.'
      + this.presentDate.getFullYear();
    return this.date;
  }
}
