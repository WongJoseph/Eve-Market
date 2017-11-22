import { Component, OnInit } from '@angular/core';
import {SearchItemService} from '../search-item.service';
import {Orders} from '../orders';
import {Observable} from 'rxjs/Observable';
import {Regions} from '../regions';
import {Stations} from '../stations';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  orders: Orders[] = [];
<<<<<<< HEAD:src/app/search/search.component.ts
  cart: Orders[];
=======
  regions: Regions[] = [];
  stations: Stations[] = [];
  regionID: number;
  searchName: string;
  cart: Orders[] = [];
>>>>>>> 682fa51153b11d4246c7e364ff56b6920cc95651:EveFront/src/app/search/search.component.ts
  itemId = [];
  model: any;
  sortByPrice = true;
  constructor(private searchItemService: SearchItemService) { }

  ngOnInit() {
    this.searchItemService.getItemId()
      .subscribe(itemId => this.itemId = itemId);
<<<<<<< HEAD:src/app/search/search.component.ts

    if(sessionStorage.getItem("cart")){
      this.cart = JSON.parse(sessionStorage.getItem("cart"));
    } else this.cart = [];
=======
    this.searchItemService.getRegionId()
      .subscribe(regions => this.regions = regions);
    this.searchItemService.getStationId()
      .subscribe(stations => this.stations = stations);
>>>>>>> 682fa51153b11d4246c7e364ff56b6920cc95651:EveFront/src/app/search/search.component.ts
  }

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .map(term => term.length < 2 ? []
        : this.itemId.filter(v => v.typeName.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));
  formatter = (x: {typeName: string}) => x.typeName;


  getOrder() {
    this.searchName = this.model.typeName;
    this.searchItemService.getOrders(this.regionID, this.model.typeID)
      .subscribe(orders => this.orders = orders);
  }

<<<<<<< HEAD:src/app/search/search.component.ts
  addToCart(index) {
    this.cart.push(this.orders[index]);
    sessionStorage.setItem("cart", JSON.stringify(this.cart));
  }

  removeFromCart(index) {
    this.cart.splice(index, 1);
    sessionStorage.setItem("cart", JSON.stringify(this.cart));
=======
  searchStation(id) {
    return this.stations.find(item => item.stationID === id);
  }

  addToCart(ind) {
    this.cart.push(this.orders[ind]);
  }

  removeFromCart(ind) {
    this.cart.splice(ind, 1);
>>>>>>> 682fa51153b11d4246c7e364ff56b6920cc95651:EveFront/src/app/search/search.component.ts
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

  clear() {
    this.orders = null;
  }
}
