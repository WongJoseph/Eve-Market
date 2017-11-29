import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Orders} from '../domain/orders';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UpdateCartService {
  private subject = new Subject<Orders[]>();

  constructor() { }

  updateCart(cart: Orders[]) {
    this.subject.next(cart);
  }

  getCart(): Observable<any> {
    return this.subject.asObservable();
  }


}
