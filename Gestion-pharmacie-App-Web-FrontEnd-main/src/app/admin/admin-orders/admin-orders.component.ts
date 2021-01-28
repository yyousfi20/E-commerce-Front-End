import { Router } from '@angular/router';
import { OrdersService } from './../../orders.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
orders={};
  constructor(private adminorder: OrdersService,private Router: Router) { }

  ngOnInit() {
    this.adminorder.getAll().subscribe(

      data=>this.orders=data.json()
    )
  }
  see(id)
  {
this.Router.navigate(['admin/bills/',id]);
  }
}
