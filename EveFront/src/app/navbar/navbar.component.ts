import { Component, OnInit } from '@angular/core';
import {Orders} from '../domain/orders';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cart: Orders[];

  constructor() { }

  ngOnInit() {
    if (sessionStorage.getItem('cart')) {
      this.cart = JSON.parse(sessionStorage.getItem('cart'));
    }
  }
}
