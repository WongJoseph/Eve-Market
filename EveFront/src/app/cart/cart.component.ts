import { Component, OnInit } from '@angular/core';
import {Orders} from '../domain/orders';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Orders[];
  totalSum: number;

  constructor() { }

  ngOnInit() {
    if (sessionStorage.getItem('cart')) {
      this.cart = JSON.parse(sessionStorage.getItem('cart'));
    }
    this.sum();
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

}
