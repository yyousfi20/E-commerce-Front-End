import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BillService {

  constructor(private Http:Http) { }


 create()
  {
    
  
    return  this.Http.post('http://localhost:8080/invoice',{
      datecreated: new Date().getTime()

    })
  }
    
  addTobill(productId,factureId,q)
  {
    return this.Http.post('http://localhost:8080/projections/'+productId+'/'+factureId,
    {
      quantity:q
    }
    ).subscribe(
    );

    }

    deleteInvoice(idInvoice)
    {
      return this.Http.delete('http://localhost:8080/invoice/'+idInvoice);
    }
    getAll()
{
  let cartId = localStorage.getItem('FactureId');

  return this.Http.get('http://localhost:8080/projections/produit/m/'+cartId);
}




}
