import { categorie } from './models/categorie';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CategoryService {


  constructor(private http: Http) { 
    
  }
  public getAll()
  {
    return this.http.get('http://localhost:8080/categorie');

    
  }
  public delete(id)
  {
    return this.http.delete('http://localhost:8080/caterogry/'+id);
  }

  create(categorie)
  {
    return this.http.post('http://localhost:8080/category', categorie);

  }

  get(categorie)
  {
    return this.http.get('http://localhost:8080/categorie/'+categorie);
  }

  update(categorieId,categorie)
  {
    return this.http.put('http://localhost:8080/categorie/'+categorieId,categorie);
  }
  

}
