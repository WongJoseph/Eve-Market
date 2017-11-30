import { Injectable } from '@angular/core';
import {Orders} from '../domain/orders';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {ReplaySubject} from 'rxjs/ReplaySubject';

@Injectable()
export class UpdateCartService {
  private subject = new ReplaySubject<Orders[]>();
  constructor(private http: HttpClient) { }

  updateCart(cart: Orders[]) {
    this.subject.next(cart);
  }

  addOrderToCart(order: Orders) {
    this.http.post('/addOrder', order).subscribe(() => {this.getCartFromDB(); });
  }

  removeOrderFromCart(order: Orders) {
    this.http.post('/deleteOrder', order.order_id).subscribe(() => {this.getCartFromDB(); });
  }

  getCartFromDB() {
    this.http.get<Orders[]>('/getCart').subscribe(res => { this.subject.next(res); });
  }

  getCart(): Observable<any> {
    return this.subject.asObservable();
  }
}
