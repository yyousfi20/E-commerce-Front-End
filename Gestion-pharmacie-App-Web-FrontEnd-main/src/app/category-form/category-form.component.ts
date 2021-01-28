import { Router, Route, ActivatedRoute } from '@angular/router';
import { categorie } from './../models/categorie';
import { CategoryService } from './../category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {
category={};
id;
  constructor(private CategoryService:CategoryService, private rout: ActivatedRoute) {
    this.id = this.rout.snapshot.paramMap.get('id');
    if (this.id) this.CategoryService.get(this.id).take(1).subscribe(p => {this.category = p.json()});
    
   
   }
  save(categorie)
  {
  
    if(this.id) this.CategoryService.update(this.id,categorie).subscribe(response => {
     console.log(response.json());
    
 
   });
    else this.CategoryService.create(categorie)
    .subscribe(response => {
      console.log(response.json());
    
 
    });
    window.location.reload();
    
 
  }
  ngOnInit() {
  }

}
