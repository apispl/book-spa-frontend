import { Component, OnInit } from '@angular/core';
import {SpaService} from "../../service/spa.service";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  servicesList: string[];
  constructor(private spaService:SpaService) { }

  ngOnInit(): void {
    this.spaService.getServices().subscribe(value => {
      this.servicesList = value;
    });
  }

  clearApp(){
    this.spaService.delete().subscribe(() => console.log("Lists are empty"));
  }

}
