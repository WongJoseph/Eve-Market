import {Injectable, OnInit} from '@angular/core';
import {Orders} from '../domain/orders';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
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
      location_id: order.location_id,
      quantity: order.quantity,
      price: order.price
    };
    this.http.post('/addOrder', returnOrder).subscribe( () => this.getCartFromDB());
    // setTimeout(() => this.getCartFromDB(), 1000);
  }

  removeOrderFromCart(order: Orders) {
    const returnOrder = {
      order_id: order.order_id,
      type_id: order.type_id,
      location_id: order.location_id,
      quantity: order.quantity,
      price: order.price
    };
    this.http.post('/deleteOrder', returnOrder).subscribe( () => this.getCartFromDB());
    // setTimeout(() => this.getCartFromDB(), 1000);
  }

  getCartFromDB() {
    this.http.get<Orders[]>('/getCart').subscribe(res => this.updateCart(res));
  }

  updateCart(cart: Orders[]) {
    this.subject.next(cart);
  }

  getCart(): Observable<any> {
    return this.subject.asObservable();
  }
}
