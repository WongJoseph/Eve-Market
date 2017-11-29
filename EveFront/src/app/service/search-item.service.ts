import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Orders} from '../domain/orders';
import {Regions} from '../domain/regions';
import {Stations} from '../domain/stations';
import {IdName} from '../domain/idName';

@Injectable()
export class SearchItemService {

  constructor(private http: HttpClient) { }

  getOrders(regionId, itemId): Observable<Orders[]> {
    return this.http.get<Orders[]>(
      'https://esi.tech.ccp.is/latest/markets/' + regionId + '/orders/?datasource=tranquility&order_type=sell&page=1&type_id=' + itemId);
  }

  getItemId(): Observable<any> {
    return this.http.get('./assets/data/itemId.json');
  }

  getRegionId(): Observable<Regions[]> {
    return this.http.get<Regions[]>('./assets/data/regionId.json');
  }

  getStationId(): Observable<Stations[]> {
    return this.http.get<Stations[]>('./assets/data/stationId.json');
  }

  getNameById(id): Observable<IdName> {
    return this.http.post<IdName>('https://esi.tech.ccp.is/latest/universe/names/?datasource=tranquility', [id]);
  }
}