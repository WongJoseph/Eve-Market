import { Component, OnInit } from '@angular/core';
import {SearchItemService} from '../search-item.service';
import {Orders} from '../domain/orders';
import {Observable} from 'rxjs/Observable';
import {Regions} from '../domain/regions';
import {Stations} from '../domain/stations';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  orders: Orders[] = [];
  cart: Orders[];
  regions: Regions[] = [];
  stations: Stations[] = [];
  regionID: number;
  searchName: string;
  itemId = [];
  selectItem: any;
  model: any;
  sortByPrice = true;
  constructor(private searchItemService: SearchItemService) { }

  ngOnInit() {
    this.searchItemService.getItemId()
      .subscribe(itemId => this.itemId = itemId);
    this.searchItemService.getRegionId()
      .subscribe(regions => this.regions = regions);
    this.searchItemService.getStationId()
      .subscribe(stations => this.stations = stations);

    if (sessionStorage.getItem('cart')) {
      this.cart = JSON.parse(sessionStorage.getItem('cart'));
    } else {this.cart = []; }

  }

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .map(term => term.length < 2 ? []
        : this.itemId.filter(v => v.typeName.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
  formatter = (x: {typeName: string}) => x.typeName;

  getOrder() {
    this.searchName = this.model.typeName;
    this.selectItem = this.model;
    this.searchItemService.getOrders(this.regionID, this.model.typeID)
      .subscribe(orders => this.orders = orders);
  }

  addToCart(index) {
    this.cart.push(this.orders[index]);
    sessionStorage.setItem('cart', JSON.stringify(this.cart));
  }

  removeFromCart(index) {
    this.cart.splice(index, 1);
    sessionStorage.setItem('cart', JSON.stringify(this.cart));
  }

  searchStation(id) {
    return this.stations.find(item => item.stationID === id);
  }

  sortPrice() {
    if (this.sortByPrice) {
      this.orders.sort(function(order1, order2) {return order1.price - order2.price; });
      this.sortByPrice = false;
    } else {
      this.orders.reverse();
      this.sortByPrice = true;
    }
    return false;
  }
}
