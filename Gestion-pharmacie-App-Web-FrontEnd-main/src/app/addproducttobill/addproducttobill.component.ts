import { BillService } from './../bill.service';
import { ShoppincartService } from './../shoppincart.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { product } from '../models/product';
import { Subscription } from 'rxjs/Subscription';
import { DataTableResource } from 'angular-4-data-table';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-addproducttobill',
  templateUrl: './addproducttobill.component.html',
  styleUrls: ['./addproducttobill.component.css']
})
export class AddproducttobillComponent implements OnInit {
  products : product[];
  filtredprodect : any[];
  subscription : Subscription;
  tableResources : DataTableResource<product>;
  items : product[] = [];
  itemCount: number = 6;
  
    constructor(private productService: ProductService,private Router:Router,private BillService:  BillService) { 
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
    localStorage.setItem('idproduct',id);
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
  
  confirmer()
  {
    localStorage.removeItem('FactureId');
    console.log(localStorage.getItem('FactureId'));
    this.Router.navigate(['admin/bills']);
  
  }
 
  save(d)
  {
   this.BillService.addTobill(localStorage.getItem('idproduct'),localStorage.getItem('FactureId'),+d.q);
   window.location.reload();
  }
  cancel()
  {
    this.BillService.deleteInvoice(localStorage.getItem('FactureId')).subscribe();
    this.Router.navigate(['admin/bills']);
  }
  
  ngOnInit() {
  }

}