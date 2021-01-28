import { product } from './../models/product';
import { Route, ActivatedRoute } from '@angular/router';
import { OrdersService } from './../orders.service';
import { Component, OnInit } from '@angular/core';
import { quantitypro } from '../models/quantitypro';
import { Location } from '@angular/common';
@Component({
  selector: 'app-bills-constmers',
  templateUrl: './bills-constmers.component.html',
  styleUrls: ['./bills-constmers.component.css']
})
export class BillsConstmersComponent implements OnInit {
id;
prod={};
TotalePrice;
  constructor(private OrdersService: OrdersService,private Router: ActivatedRoute,private Location:Location) {
    this.id=this.Router.snapshot.paramMap.get('id');
   }
getBills()
{
  this.OrdersService.getByBill(this.id).subscribe(data=>{
    this.prod=data.json();
    console.log(this.prod);
    let sum=0;
    for(let products in this.prod)
    {
      sum += this.prod[products].produits.price*this.prod[products].quantity;
      console.log(products);
     
    }
    console.log(sum);
    this.TotalePrice=sum;
    
  }
    );
}
back()
{
  this.Location.back();
}
  ngOnInit() {
    this.getBills();
  }
 
   
 
  
}
