import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SpaService} from "./service/spa.service";
import {OrderRequest} from "./OrderRequest";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;

  constructor() {
    this.title = "Booking SPA&WALLNESS"
  }
}
