import { Component, OnInit } from '@angular/core';
import {Orders} from '../domain/orders';
import {Regions} from '../domain/regions';
import {SearchItemService} from '../service/search-item.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Orders[];
  regions: Regions[] = [];
  totalSum = 0;

  constructor(private searchItemService: SearchItemService) { }

  ngOnInit() {
    this.searchItemService.getRegionId()
      .subscribe(regions => this.regions = regions);
    if (sessionStorage.getItem('cart')) {
      this.cart = JSON.parse(sessionStorage.getItem('cart'));
      this.sum();
    }
  }

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

  getRegionName(regionID) {
    for (let i = 0; i < this.regions.length; i++) {
      if (this.regions[i].regionID === regionID) {
        return this.regions[i].name;
      }
    }
  }
}
