import { Component, OnInit } from '@angular/core';
import {OrderRequest} from "../../OrderRequest";
import {SpaService} from "../../service/spa.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-order-request-list',
  templateUrl: './order-request-list.component.html',
  styleUrls: ['./order-request-list.component.css']
})
export class OrderRequestListComponent implements OnInit {

  displayedColumns: string[] = ['ID','Type of Service','Name','Surname','Address','Date','Hour', 'Additional'];
  dataSource: MatTableDataSource<OrderRequest>;

  constructor(private spaService:SpaService) {
  }

  ngOnInit(): void {
    this.spaService.getRequestList().subscribe(value =>{
      this.dataSource = new MatTableDataSource<OrderRequest>(value);
      console.log(this.dataSource);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }
}
