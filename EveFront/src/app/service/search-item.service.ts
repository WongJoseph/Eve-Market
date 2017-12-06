import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Orders} from '../domain/orders';
import {Regions} from '../domain/regions';
import {Stations} from '../domain/stations';
import {IdName} from '../domain/idName';
import {Item} from '../domain/item';
import {ReplaySubject} from "rxjs/ReplaySubject";

@Injectable()
export class SearchItemService{
  private stationList = new ReplaySubject<Stations[]>();
  private regionList = new ReplaySubject<Regions[]>();
  private itemList = new ReplaySubject<Item[]>();


  constructor(private http: HttpClient) {
    this.getItemId();
    this.getStationId();
    this.getRegionId();
  }


  getOrders(regionId, itemId): Observable<Orders[]> {
    return this.http.get<Orders[]>(
      'https://esi.tech.ccp.is/latest/markets/' + regionId + '/orders/?datasource=tranquility&order_type=sell&page=1&type_id=' + itemId);
  }

  getItemId(){
    this.http.get<Item[]>('./assets/data/itemId.json').subscribe(items => this.itemList.next(items));
  }

  getRegionId() {
    this.http.get<Regions[]>('./assets/data/regionId.json').subscribe(regions => this.regionList.next(regions));
  }

  getStationId(){
    this.http.get<Stations[]>('./assets/data/stationId.json').subscribe(stations => this.stationList.next(stations));
  }

  getNameById(id): Observable<IdName> {
    return this.http.post<IdName>('https://esi.tech.ccp.is/latest/universe/names/?datasource=tranquility', [id]);
  }

  getItemById(type_id):Observable<Item> {
   let subject = new ReplaySubject<Item>();
    this.getItemList().subscribe(items => {
      let frontIndex: number = 0;
      let backIndex: number = items.length - 1;
      let midIndex = backIndex;
      let indexSum = frontIndex + backIndex;
      do {
        indexSum = frontIndex + backIndex;
        if (indexSum % 2 == 0) {
          midIndex = indexSum / 2;
        } else {
          midIndex = (indexSum - 1) / 2;
        }
        if (type_id == items[midIndex].typeID) {
          subject.next(items[midIndex]);
          console.log(items[midIndex]);
          break;
        } else if (type_id < items[midIndex].typeID) {
          backIndex = midIndex;
        } else if (type_id > items[midIndex].typeID) {
          frontIndex = midIndex;
        }
        if (type_id == items[backIndex].typeID) {
          subject.next(items[backIndex]);
          console.log(items[backIndex]);
          break;
        }
      } while (frontIndex != backIndex);
    });
    return subject.asObservable();
  }

  getItemList(): Observable<Item[]> {
    return this.itemList.asObservable();
  }

  getStationList() :Observable<Stations[]> {
    return this.stationList.asObservable();
  }

  getRegionList(): Observable<Regions[]> {
    return this.regionList.asObservable();
  }
}
