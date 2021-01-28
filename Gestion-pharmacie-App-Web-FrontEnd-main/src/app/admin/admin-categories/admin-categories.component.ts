import { Router } from '@angular/router';
import { CategoryService } from './../../category.service';
import { categorie } from './../../models/categorie';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { DataTableResource } from 'angular-4-data-table';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css']
})
export class AdminCategoriesComponent implements OnInit {

  category : categorie[];
  filtredcategory : any[];
  subscription : Subscription;
  tableResources : DataTableResource<categorie>;
  items : categorie[] = [];
  itemCount: number = 6;
  constructor(private CategoryService: CategoryService,private Router:Router) { 

    this.subscription = this.CategoryService.getAll().subscribe(data => {
     this.filtredcategory = this.category=data.json(); 
     this.initializeTable(this.category);
    }
      , err => {console.log(err);
    });

  }

  private initializeTable(categorie:categorie[])
  {
    this.tableResources = new DataTableResource(categorie);
     this.tableResources.query({ offset:0 })
     .then(items => this.items = items );
     this.tableResources.count()
     .then(count => this.itemCount = count);

  }
 
  reloadItems(params)
{
  if(!this.tableResources) return;
  this.tableResources.query(params)
  .then(items => this.items = items );
}

  ngOnInit() {
  }

  filter(query : String )
  {

    this.filtredcategory = (query) ?
      this.category.filter(p =>p.name.toLowerCase().includes(query.toLowerCase())) :
      this.category;
      this.initializeTable(this.filtredcategory);
     
    console.log(query.toLowerCase());
 


  }
  ok(){
    this.Router.navigate(['/admin/category']);
  }


  
 delete(id)
 {
   if(!confirm('are you sure you want  delete this categorie?')) return;
     this.CategoryService.delete(id).subscribe();
   window.location.reload;
   
 }
 
ngOnDestroy()
{

}

}
