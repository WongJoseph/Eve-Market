import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import {Orders} from '../orders';
import {Stations} from "../stations";
import {SearchItemService} from "../search-item.service";
=======
import {Orders} from '../domain/orders';
>>>>>>> 73979b6b10d0551cda5c428216739a87cfb39d3f

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Orders[];
<<<<<<< HEAD
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

=======
  totalSum = 0;

  constructor() { }

  ngOnInit() {
    if (sessionStorage.getItem('cart')) {
      this.cart = JSON.parse(sessionStorage.getItem('cart'));
      this.sum();
    }
  }

>>>>>>> 73979b6b10d0551cda5c428216739a87cfb39d3f
  removeFromThisCart(index) {
    this.cart.splice(index, 1);
    sessionStorage.setItem('cart', JSON.stringify(this.cart));
    this.sum();
    return false;
  }

  sum() {
    let currentTotal = 0;
    for (let i = 0; i < this.cart.length; i++) {
      currentTotal += this.cart[i].price * this.cart[i].quantity;
    }
    this.totalSum = currentTotal;
  }

}
