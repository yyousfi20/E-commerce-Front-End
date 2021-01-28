import { comment } from './../models/comment';
import { ShoppincartService } from './../shoppincart.service';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from './../auth.service';
import { CommentsService } from './../comments.service';
import { ProductService } from './../product.service';
import { product } from './../models/product';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';




@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
 
product:product={

  id: +this.Router.snapshot.paramMap.get('id'), 
  title : "",
  price : 0,
  imageUrl : "",
  categorie : "",
  description : "",
comments: []
};
  contentText;
  id;
  userSubscription: Subscription;
  
  quantity: number;
  content;
  comment:any[]=[];
  c:any[]=[];


  userId: string;
  ouvrire:boolean;
  categorie;
  productrec:product[];


  

  constructor(private Router: ActivatedRoute,private ProductService:ProductService,private CommentsService: CommentsService,private AuthService:AuthService,private ShoppincartService: ShoppincartService,private R: Router) {
    this.id=this.Router.snapshot.paramMap.get('id');
    this.ProductService.get(this.id).subscribe(
      data => 
      {
        
      this.c = data.json().comments;
      console.log(this.c);
        this.product=data.json();
        console.log(this.product);
        this.categorie=data.json().categorie;
        this.ProductService.getBycategorie(this.categorie).subscribe(data=>{this.productrec=data.json();
          console.log(this.productrec)
        })
        
        
      
        
      }
  )
  
   }
   commenter()
{
  if(this.userId)
  {
    this.ouvrire=true;

  }
 else{
   this.ouvrire=false;
 }

}
save(f)
   {
     
     this.CommentsService.create(this.id,f.content,this.userId).subscribe();
     window.location.reload();
   }
   done()
   {
    window.location.reload();
   }

   goBack()
   {
     window.history.back();
   }

  
   ngOnInit()
   {
     console.log(localStorage.getItem('p1'));
     console.log(localStorage.getItem('p2'));
     console.log(localStorage.getItem('p3'));
     this.userSubscription= this.AuthService.user$.subscribe(user =>{ 
      if(user)
      {
        this.userId = user.uid ;
        this.ouvrire = true;
  
      }
      else{
        this.ouvrire = false;
      }
      
   
    });
    
   
   }
   

}
