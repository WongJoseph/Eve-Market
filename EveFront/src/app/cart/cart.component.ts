import {Component, OnInit} from '@angular/core';
import {Orders} from '../domain/orders';
import {Regions} from '../domain/regions';
import {SearchItemService} from '../service/search-item.service';
import {UpdateCartService} from '../service/update-cart.service';
import {Subscription} from 'rxjs/Subscription';
import {Item} from '../domain/item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Orders[];
  subscription: Subscription;
  totalSum = 0;

  constructor(private searchItemService: SearchItemService, private updateCartService: UpdateCartService) {
  }

  ngOnInit() {
    this.updateCartService.getCartFromDB();
    this.subscription = this.updateCartService.getCart()
      .subscribe(cart => {
        this.cart = cart;
        this.sum();
      });
  }

  removeFromThisCart(index) {
    this.updateCartService.removeOrderFromCart(this.cart[index]);
  }

  sum() {
    let currentTotal = 0;
    for (let i = 0; i < this.cart.length; i++) {
      currentTotal += this.cart[i].price * this.cart[i].quantity;
    }
    this.totalSum = currentTotal;
  }

  alertColor(order: Orders): String {
    if (!order.still_exists) {
      return 'table-danger';
    } else if (order.quantity_too_big) {
      return 'table-warning';
    } else {
      return '';
    }
  }
}
