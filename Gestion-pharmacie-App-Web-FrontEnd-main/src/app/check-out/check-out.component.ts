import { BillService } from './../bill.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from './../auth.service';
import { OrdersService } from './../orders.service';
import { ShoppincartService } from './../shoppincart.service';
import { Component, OnInit, OnDestroy, AfterViewChecked } from '@angular/core';

declare let paypal: any;
@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit, OnDestroy{ 
  shipping = {}; 
  id_shipping;
  userId;
  userSubscription: Subscription;
  addScript: boolean = false;
  paypalLoad: boolean = true;
  
  finalAmount: number = 1;




  
  constructor( private OrdersService: OrdersService, private AuthService: AuthService, private Router: Router, private BillService: BillService) { 
    
  }
  ngOnDestroy()
  {
    this.userSubscription.unsubscribe();

  }
  
  
  ngOnInit()
  {

   this.userSubscription= this.AuthService.user$.subscribe(user => this.userId = user.uid );

  }
  see()
  {
    this.Router.navigate(['/my/orders']);
  }
  
  placeOrder() {
    let FactureId = localStorage.getItem('FactureId');
    
    
    this.OrdersService.createshipping(this.shipping).subscribe(data => 
      {
      this.id_shipping = data.json().id;
      console.log(this.userId);
      this.OrdersService.createOrder(this.id_shipping,FactureId,this.userId).subscribe(

      );

      }
    );
   
    console.log(this.id_shipping);
  }  
 


 
  
}
