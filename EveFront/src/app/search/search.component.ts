import { Component, OnInit } from '@angular/core';
import {SearchItemService} from '../search-item.service';
import {Orders} from '../orders';
import {Observable} from 'rxjs/Observable';
import {Regions} from '../regions';
import {Stations} from '../stations';
import index from '@angular/cli/lib/cli';
import {mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  orders: Orders[] = [];
  regions: Regions[] = [];
  stations: Stations[] = [];
  regionID: number;
  searchName: string;
  cart: Orders[] = [];
  itemId = [];
  model: any;
  temp: any;
  sortByPrice = true;
  constructor(private searchItemService: SearchItemService) { }

  ngOnInit() {
    this.searchItemService.getItemId()
      .subscribe(itemId => this.itemId = itemId);
    this.searchItemService.getRegionId()
      .subscribe(regions => this.regions = regions);
    this.searchItemService.getStationId()
      .subscribe(stations => this.stations = stations);
  }

  show2() {
    console.log(this.temp);
  }

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .map(term => term.length < 2 ? []
        : this.itemId.filter(v => v.typeName.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
  formatter = (x: {typeName: string}) => x.typeName;


  getOrder() {
    this.searchName = this.model.typeName;
    this.searchItemService.getOrders(this.regionID, this.model.typeID)
      .subscribe(orders => this.orders = orders);
  }

  searchStation(id) {
    return this.stations.find(item => item.stationID === id);
  }

  addToCart(ind) {
    this.cart.push(this.orders[ind]);
  }

  removeFromCart(ind) {
    this.cart.splice(ind, 1);
  }

  sortPrice() {
    if (this.sortByPrice) {
      this.orders.sort(function(order1, order2) {return order1.price - order2.price; });
      this.sortByPrice = false;
    } else {
      this.orders.reverse();
      this.sortByPrice = true;
    }
  }
}
