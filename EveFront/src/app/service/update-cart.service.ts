import {Injectable, OnInit} from '@angular/core';
import {Orders} from '../domain/orders';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {ReturnOrder} from '../domain/returnOrder';
import {SearchItemService} from './search-item.service';

@Injectable()
export class UpdateCartService {
  private subject = new ReplaySubject<Orders[]>();

  constructor(private http: HttpClient) {
  }

  addOrderToCart(order: Orders) {
    const returnOrder = {
      order_id: order.order_id,
      type_id: order.type_id,
<<<<<<< HEAD
      region_id: order.regionId,
=======
      region_id: order.region_id,
>>>>>>> a0871d9bd504fdbc230e7172a741f7ee77bf574d
      stationName: order.stationName,
      quantity: order.quantity,
      price: order.price
    };
<<<<<<< HEAD
    const headers = new HttpHeaders({'X-Requested-With': 'XMLHttpRequest'});
    const options = {headers: headers, withCredentials: true};
    this.http.post('http://localhost:8080/addOrder', returnOrder, options).subscribe(() => this.getCartFromDB());
=======
    this.http.post('/addOrder', returnOrder).subscribe( () => this.getCartFromDB());
>>>>>>> a0871d9bd504fdbc230e7172a741f7ee77bf574d
  }

  removeOrderFromCart(order: Orders) {
    const returnOrder = {
      order_id: order.order_id,
      type_id: order.type_id,
<<<<<<< HEAD
      region_id: order.regionId,
=======
      region_id: order.region_id,
>>>>>>> a0871d9bd504fdbc230e7172a741f7ee77bf574d
      stationName: order.stationName,
      quantity: order.quantity,
      price: order.price
    };
<<<<<<< HEAD
    const headers = new HttpHeaders({'X-Requested-With': 'XMLHttpRequest'});
    const options = {headers: headers, withCredentials: true};
    this.http.post('http://localhost:8080/deleteOrder', returnOrder, options).subscribe(() => this.getCartFromDB());
=======
    this.http.post('/deleteOrder', returnOrder).subscribe( () => this.getCartFromDB());
>>>>>>> a0871d9bd504fdbc230e7172a741f7ee77bf574d
  }

  getCartFromDB() {
    const headers = new HttpHeaders({'X-Requested-With': 'XMLHttpRequest'});
    const options = {headers: headers, withCredentials: true};
    this.http.get<Orders[]>('http://localhost:8080/getCart',options).subscribe(res => this.updateCart(res));
  }

  updateCart(cart: Orders[]) {
    this.subject.next(cart);
  }

  getCart(): Observable<any> {
    return this.subject.asObservable();
  }
}
