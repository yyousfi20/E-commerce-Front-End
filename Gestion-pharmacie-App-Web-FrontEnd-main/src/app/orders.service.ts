import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class OrdersService {

  constructor(private Http: Http) { }



  getOrdersbyuser(userid,invoice)
  {
    return this.Http.get('http://localhost:8080/orders/'+userid+'/'+invoice);
  }
  createshipping(shipping)
  {
    
     return  this.Http.post('http://localhost:8080/custmer',shipping);
  }
createOrder(orders,cartId,userid)
{
  return this.Http.post('http://localhost:8080/orders/'+orders+'/'+cartId,
  {
  dayePlaced: new Date().getTime(),
  userid: userid
  
  })}

  createordersProjection(projection_id,orders_id)
  {
return this.Http.post('http://localhost:8080/orders/'+projection_id+'/'+orders_id,{
  
});
  }
getAll()
{
  return this.Http.get('http://localhost:8080/orders')
}
getByBill(idFacture)
{
  return this.Http.get('http://localhost:8080/projections/'+idFacture);
}
}
