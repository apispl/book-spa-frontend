import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SpaService} from "./service/spa.service";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import { OrderRequestListComponent } from './components/order-request-list/order-request-list.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import {FormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {DatePipe} from "@angular/common";
import { SummaryComponent } from './components/summary/summary.component';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    OrderRequestListComponent,
    PlaceOrderComponent,
    SummaryComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatSelectModule,
        MatButtonModule
    ],
  providers: [SpaService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
