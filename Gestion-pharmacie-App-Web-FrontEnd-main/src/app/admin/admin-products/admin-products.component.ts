import { Router } from '@angular/router';
import { product } from './../../models/product';
import { ProductService } from './../../product.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { DataTableResource } from 'angular-4-data-table';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit  {
  products : product[];
  filtredprodect : any[];
  subscription : Subscription;
  tableResources : DataTableResource<product>;
  items : product[] = [];
  itemCount: number = 6;
  constructor(private productService: ProductService,private Router:Router) { 

    this.subscription = this.productService.getAll().subscribe(data => {
     this.filtredprodect = this.products=data.json(); 
     this.initializeTable(this.products);
    }
      , err => {console.log(err);
    });

  }

  private initializeTable(products:product[])
  {
    this.tableResources = new DataTableResource(products);
     this.tableResources.query({ offset:0 })
     .then(items => this.items = items );
     this.tableResources.count()
     .then(count => this.itemCount = count);

  }
  
  ngOnInit() {
  }

 
  reloadItems(params)
{
  if(!this.tableResources) return;
  this.tableResources.query(params)
  .then(items => this.items = items );
}

  filter(query : String )
  {

    this.filtredprodect = (query) ?
      this.products.filter(p =>p.title.toLowerCase().includes(query.toLowerCase())) :
      this.products;
      this.initializeTable(this.filtredprodect);
     
    console.log(query.toLowerCase());
 


  }
  ok(){
    this.Router.navigate(['/admin/products']);
  }


  
 delete(id)
 {
   if(!confirm('are you sure you want to delete this product?')) return;
   
     this.productService.delete(id).subscribe();
   window.location
   
 }
 
ngOnDestroy()
{

}

}
