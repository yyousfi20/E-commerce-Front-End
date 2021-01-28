import { AuthService } from './../auth.service';
import { AuthGuard } from './../auth-guard.service';
import { WishlistService } from './../wishlist.service';
import { MessengerService } from './../messenger.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { projection } from './../models/projection';
import { ShoppincartService } from './../shoppincart.service';
import { product } from './../models/product';

import 'rxjs/add/operator/take';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input('product') product: product;
  @Input('show-actions') showActions = true;
  @Input('shopping-cart') ShoppingCart;
  @Input() AddToWishList: boolean ;
  quantity: number;
  userSubscription: Subscription;

  userId: string;

  constructor(private ShoppincartService: ShoppincartService,private Router:Router, private Msg: MessengerService,private wishlist: WishlistService,private AuthService: AuthService) {
    
   }
  addcart()
  {
    this.ngOnInit();
    this.Msg.sendMsg(this.product);
    this.ShoppincartService.addtocart(this.product);
   
}
getQuantity()
{

   this.ShoppincartService.getitems(this.product.id).subscribe(data =>
    {  

      if(data.json().toString() === "" )
  {
    this.quantity = 0;
  }
  else
  {
      this.quantity = data.json();
      console.log(data.json());
      console.log(this.quantity.toString());
 
  }
      
    });
    
 

  
}



addTowishlist(product)
{
  
  if(this.userId)
  {
  this.wishlist.addowishlist(product.id).subscribe();
  this.AddToWishList= true;}
  else
  {
    console.log("go to hel");
    this.Router.navigate(['login']);
  }
}
removeFromwishlist(product)
{
  this.wishlist.removefromwishlist(product.id).subscribe();
  this.AddToWishList=false;
}
myFunction(product)
{
  let product1=localStorage.getItem('p1');
  let product2=localStorage.getItem('p2');
  let product3= localStorage.getItem('p3');
  if(product1)
  {
    //localStorage.setItem('p2',product1);
    //localStorage.setItem('p1',product.id);
    localStorage.setItem('p3',product2);
    localStorage.setItem('p2',product1);
    localStorage.setItem('p1',product.id);
  }
  this.Router.navigate(['productDetails/', product.id]);
  console.log(product.imageUrl);
}


ngOnInit()
{
  this.getQuantity();
  this.userSubscription= this.AuthService.user$.subscribe(user =>{ 
    if(user)
    {
      this.userId = user.uid ;

    }
    
 
  });
}

ngOnDestroy()
{
  this.userSubscription.unsubscribe();

}

}
