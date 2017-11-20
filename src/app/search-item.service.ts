import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Orders} from './orders';

@Injectable()
export class SearchItemService {

  constructor(private http: HttpClient) { }

  getOrders(itemId): Observable<Orders[]> {
    return this.http.get<Orders[]>(
      'https://esi.tech.ccp.is/latest/markets/10000002/orders/?datasource=tranquility&order_type=sell&page=1&type_id=' + itemId);
  }

  getItemId(): Observable<any> {
    return this.http.get('./assets/data/itemId.json');
  }
}
