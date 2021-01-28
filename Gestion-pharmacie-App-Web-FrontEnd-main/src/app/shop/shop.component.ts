import { Component, OnInit } from '@angular/core';
import { product } from '../models/product';
import { Subscription } from 'rxjs/Subscription';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { WishlistService } from './../wishlist.service';
import { ShoppincartService } from './../shoppincart.service';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  

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


  }



  
  loadwishlist()
  {
    this.WishlistService.getwishlist().subscribe(data=>
      {this.wishlist=data
        console.log(this.wishlist);
      });
  }

}
