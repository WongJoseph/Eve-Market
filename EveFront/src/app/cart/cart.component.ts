import { Component, OnInit } from '@angular/core';
import {Orders} from '../domain/orders';
import {Regions} from '../domain/regions';
import {SearchItemService} from '../service/search-item.service';
import {UpdateCartService} from '../service/update-cart.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Orders[];
  regions: Regions[] = [];
  subscription: Subscription;
  totalSum = 0;

  constructor(private searchItemService: SearchItemService, private updateCartService: UpdateCartService) {
    this.subscription = this.updateCartService.getCart().subscribe( cart => this.cart = cart);
  }

  ngOnInit() {
    // this.cart = this.updateCartService.returnCart();
    this.searchItemService.getRegionId()
      .subscribe(regions => this.regions = regions);
    // if (sessionStorage.getItem('cart')) {
    //   this.cart = JSON.parse(sessionStorage.getItem('cart'));
    // }
    if (this.cart != null) {
      this.sum();
    }
  }

  removeFromThisCart(index) {
    this.cart.splice(index, 1);
    // sessionStorage.setItem('cart', JSON.stringify(this.cart));
    this.updateCartService.updateCart(this.cart);
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
