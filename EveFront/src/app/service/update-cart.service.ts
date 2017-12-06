import {Injectable, OnInit} from '@angular/core';
import {Orders} from '../domain/orders';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {ReturnOrder} from '../domain/returnOrder';
import {SearchItemService} from './search-item.service';
import {Item} from '../domain/item';
import {falseIfMissing} from "protractor/built/util";
import {Stations} from "../domain/stations";

@Injectable()
export class UpdateCartService {
  private subject = new ReplaySubject<Orders[]>();
  itemId: Item[];
  private missingMessage = new ReplaySubject<boolean>();
  private tooManyMessage = new ReplaySubject<boolean>();
  constructor(private http: HttpClient, private searchItemService: SearchItemService) {
    this.missingMessage.next(false);
    this.tooManyMessage.next(false);
  }

  addOrderToCart(order: Orders) {
    const returnOrder = {
      order_id: order.order_id,
      type_id: order.type_id,
      region_id: order.region_id,
      stationName: order.stationName,
      quantity: order.quantity,
      price: order.price
    };
    const headers = new HttpHeaders({'X-Requested-With': 'XMLHttpRequest'});
    const options = {headers: headers, withCredentials: true};
    this.http.post('http://ec2-35-162-161-132.us-west-2.compute.amazonaws.com:8080/addOrder', returnOrder, options).subscribe(() => this.getCartFromDB());
  }

  removeOrderFromCart(order: Orders) {
      const returnOrder = {
        order_id: order.order_id,
        type_id: order.type_id,
        region_id: order.region_id,
        stationName: order.stationName,
        quantity: order.quantity,
        price: order.price
      };

      const headers = new HttpHeaders({'X-Requested-With': 'XMLHttpRequest'});
      const options = {headers: headers, withCredentials: true};
      this.http.post('http://ec2-35-162-161-132.us-west-2.compute.amazonaws.com:8080/deleteOrder', returnOrder, options).subscribe(() => this.getCartFromDB());
    }

  getCartFromDB() {
    const headers = new HttpHeaders({'X-Requested-With': 'XMLHttpRequest'});
    const options = {headers: headers, withCredentials: true};
    this.http.get<Orders[]>('http://ec2-35-162-161-132.us-west-2.compute.amazonaws.com:8080/getCart', options).subscribe(res => this.updateCart(res));
  }

  updateCart(cart: Orders[]) {
    this.missingMessage.next(false);
    this.tooManyMessage.next(false);
    for (let i = 0; i < cart.length; i++) {
      this.checkCartItems(cart[i]);
    }
    this.searchItemService.getItemList()
      .subscribe(itemId => {this.itemId = itemId; this.getItem(cart); });
  }

  checkCartItems(order: Orders) {
    this.searchItemService.getOrders(order.region_id, order.type_id).subscribe(orders => {
      order.quantity_too_big = false;
      this.searchItemService.getStationList().subscribe(stations => {let station = stations.filter(station => station.stationName == order.stationName)[0];
      order.location_id = station.stationID});
      let filteredOrder = orders.filter(function (item) {
        return item.order_id == order.order_id;
      })[0];
      if (filteredOrder == undefined) {
        order.still_exists = false;
        this.missingMessage.next(true);
      } else {
        order.still_exists = true;
        if (order.quantity > filteredOrder.volume_remain) {
          order.quantity_too_big = true;
          this.tooManyMessage.next(true);
        }
      }
    });
  }

  getCart(): Observable<any> {
    return this.subject.asObservable();
  }

  getItem(cart) {
    for (let i = 0; i < cart.length; i++) {
      let frontIndex = 0;
      let backIndex = this.itemId.length - 1;
      let midIndex = backIndex;
      let indexSum = frontIndex + backIndex;
      do {
        indexSum = frontIndex + backIndex;
        if (indexSum % 2 == 0) {
          midIndex = indexSum / 2;
        } else {
          midIndex = (indexSum - 1) / 2;
        }
        if (cart[i].type_id == this.itemId[midIndex].typeID) {
          cart[i].item = this.itemId[midIndex];
          break;
        } else if (cart[i].type_id < this.itemId[midIndex].typeID) {
          backIndex = midIndex;
        } else if (cart[i].type_id > this.itemId[midIndex].typeID) {
          frontIndex = midIndex;
        }
        if (cart[i].type_id == this.itemId[backIndex].typeID) {
          cart[i].item = this.itemId[backIndex];
          break;
        }
      } while (frontIndex != backIndex);
    }
    this.subject.next(cart);
  }

  getMissingMessage():Observable<boolean> {
    return this.missingMessage.asObservable();
  }

  getTooManyMessage():Observable<boolean> {
    return this.tooManyMessage.asObservable();
  }
}
