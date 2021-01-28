import { WishlistService } from './../wishlist.service';
import { ShoppincartService } from './../shoppincart.service';
import { product } from './../models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  items: Array<any> = [];
 products: product[];
 category : string;
 filtredproduct: any[];
 cart: any;
 Subscription: Subscription;
 wishlist: number[]=[];
 lastview: number[]=[];
  constructor( 
    private productService : ProductService,
    private ShoppincartService :ShoppincartService, 
    
     route : ActivatedRoute,
     private WishlistService: WishlistService
    ) { 
     


    this.productService.getAll().switchMap(
      data => {
         this.filtredproduct = this.products = data.json();
         return route.queryParamMap;})
        .subscribe(params => {
          this.category = params.get('category');
          this.filtredproduct = (this.category) ? 
            this.products.filter(p => p.categorie === this.category) : 
            this.products;
            console.log(this.filtredproduct);
            
      });
      
      
    }
    

ngOnInit()
{
  this.loadwishlist()
 this.ShoppincartService.getcart().subscribe(cart => this.cart = cart )
      
    this.WishlistService.getproductsfromwishlist().subscribe(data=>console.log(data));
    let product1=localStorage.getItem('p1');
    let product2=localStorage.getItem('p2');
    let product3= localStorage.getItem('p3');
if(product1 == product2 && product1 != product3)
{
  this.lastview.push(+product1);
  this.lastview.push(+product3);
}
  if(product1 == product3 && product2 != product1)
  {
    this.lastview.push(+product1);
    this.lastview.push(+product2);
    console.log(1);
  }
  if(product2 == product3 && product2 != product1)
  {
    this.lastview.push(+product1);
    this.lastview.push(+product2);
    console.log(2);
  }
  if(product1==product2 && product1==product3)
  {
    this.lastview.push(+product1);
    console.log(3);
  }
   if(product1 != product2 && product1 != product3 && product2 != product3)
  {
    this.lastview.push(+product1);
    this.lastview.push(+product2);
    this.lastview.push(+product3);
    console.log(4);
   }   
  
      console.log(this.lastview);

    

  }



  
  loadwishlist()
  {
    this.WishlistService.getwishlist().subscribe(data=>
      {this.wishlist=data
        console.log(this.wishlist);
      });
  }
  
}
