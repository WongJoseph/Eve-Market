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
      region_id: order.regionId,
      stationName: order.stationName,
      quantity: order.quantity,
      price: order.price
    };
    const headers = new HttpHeaders({'X-Requested-With': 'XMLHttpRequest'});
    const options = {headers: headers, withCredentials: true};
    this.http.post('http://localhost:8080/addOrder', returnOrder, options).subscribe(() => this.getCartFromDB());
  }

  removeOrderFromCart(order: Orders) {
    const returnOrder = {
      order_id: order.order_id,
      type_id: order.type_id,
      region_id: order.regionId,
      stationName: order.stationName,
      quantity: order.quantity,
      price: order.price
    };
    const headers = new HttpHeaders({'X-Requested-With': 'XMLHttpRequest'});
    const options = {headers: headers, withCredentials: true};
    this.http.post('http://localhost:8080/deleteOrder', returnOrder, options).subscribe(() => this.getCartFromDB());
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
