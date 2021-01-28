import { Router } from '@angular/router';
import { BillService } from './../../bill.service';
import { ProductService } from './../../product.service';
import { Component, OnInit } from '@angular/core';
import { product } from '../../models/product';
import { DataTableResource } from 'angular-4-data-table';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {
facture;
products : product[];
filtredprodect : any[];
subscription : Subscription;
tableResources : DataTableResource<product>;
items : product[] = [];
itemCount: number = 6;

  constructor(private BillService: BillService,private productService: ProductService,private Router:Router) { 
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
ajouter(id)
{
  
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
create()
{
  this.BillService.create().subscribe( data=>{
    localStorage.setItem('FactureId', data.json().id);
   
   this.Router.navigate(['admin/bills/add']);
    
  } );
  
 
}
confirmer()
{
  localStorage.removeItem('FactureId');
  console.log(localStorage.getItem('FactureId'));

}
  ngOnInit() {
  }

}
