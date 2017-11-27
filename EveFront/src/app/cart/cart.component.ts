import { Component, OnInit } from '@angular/core';
import {Orders} from '../orders';
import {Stations} from "../stations";
import {SearchItemService} from "../search-item.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  cart: Orders[];
  stations: Stations[] = [];

  constructor(private searchItemService: SearchItemService) { }

  ngOnInit() {if(sessionStorage.getItem('cart')) {
    this.cart = JSON.parse(sessionStorage.getItem('cart'));
    this.searchItemService.getStationId()
      .subscribe(stations => this.stations = stations);
  }
  }

  searchStation(id) {
    return this.stations.find(item => item.stationID === id);
  }

  removeFromThisCart(index) {
    this.cart.splice(index, 1);
    sessionStorage.setItem('cart', JSON.stringify(this.cart));
  }

}
