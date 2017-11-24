import { Component, OnInit } from '@angular/core';
import {Orders} from '../orders';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  cart: Orders[];


  constructor() { }

  ngOnInit() {if(sessionStorage.getItem('cart')) {
    this.cart = JSON.parse(sessionStorage.getItem('cart'));
  }
  }



  removeFromThisCart(index) {
    this.cart.splice(index, 1);
    sessionStorage.setItem('cart', JSON.stringify(this.cart));
  }

}
