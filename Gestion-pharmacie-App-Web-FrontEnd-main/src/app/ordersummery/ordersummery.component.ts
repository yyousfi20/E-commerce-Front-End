import { BillService } from './../bill.service';
import { ShoppincartService } from './../shoppincart.service';
import { product } from './../models/product';
import { quantitypro } from './../models/quantitypro';
import { Component, OnInit } from '@angular/core';
import { MessengerService } from '../messenger.service';

@Component({
  selector: 'app-ordersummery',
  templateUrl: './ordersummery.component.html',
  styleUrls: ['./ordersummery.component.css']
})
export class OrdersummeryComponent implements OnInit {

  cartItems = [
    // { id: 1, proudctId: 1, productName: 'Test 1', qty: 4, price: 100 },
    // { id: 2, proudctId: 3, productName: 'Test 3', qty: 5, price: 50 },
    // { id: 3, proudctId: 2, productName: 'Test 2', qty: 3, price: 150 },
    // { id: 4, proudctId: 4, productName: 'Test 4', qty: 2, price: 200 },
  ];

  cartTotal = 0

  constructor(private msg: MessengerService, private BillService: BillService) { }

 
 
ngOnInit() {
  this.addProductToCart();
 // this.calcCartTotal();
  this.msg.getMsg().subscribe((product: quantitypro) => {
    this.addProductToCart()
  })

}

addProductToCart() {

this.BillService.getAll().subscribe(
  (items) => 
	{
      this.cartItems = items.json();
      this.calcCartTotal();
      console.log(this.cartItems)
      
    })

  
}


calcCartTotal() {
  this.cartTotal = 0
  this.cartItems.forEach(item => {
    this.cartTotal += (item.quantity * item.price)
  })
}
}



