import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {OrderRequestListComponent} from "./components/order-request-list/order-request-list.component";
import {PlaceOrderComponent} from "./components/place-order/place-order.component";
import {SummaryComponent} from "./components/summary/summary.component";

const routes: Routes = [
  {path: 'order-request-list', component: OrderRequestListComponent },
  {path: 'place-order', component: PlaceOrderComponent},
  {path: 'summary', component: SummaryComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
