import { Component, OnInit } from '@angular/core';
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
  itemId: Item[];
  subscription: Subscription;
  totalSum = 0;

  constructor(private searchItemService: SearchItemService, private updateCartService: UpdateCartService) {}

  ngOnInit() {
    this.updateCartService.getCartFromDB();
    this.searchItemService.getItemId()
      .subscribe(itemId => {this.itemId = itemId;
        this.subscription = this.updateCartService.getCart()
          .subscribe( cart => {this.cart = cart; this.getItem(); this.sum(); });  });
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

  getItem() {
    console.log('here');
    console.log(this.cart);
    console.log(this.itemId);
    for (let i = 0; i < this.cart.length; i++) {
      let frontIndex = 0;
      let backIndex = this.itemId.length - 1;
      let midIndex = backIndex;
      let indexSum = frontIndex + backIndex;
      do {
        indexSum = frontIndex + backIndex;
        if (indexSum % 2 == 0) {
          midIndex = indexSum / 2;
        } else {
          midIndex = (indexSum - 1) / 2;
        }
        if (this.cart[i].type_id == this.itemId[midIndex].typeID) {
          this.cart[i].item = this.itemId[midIndex];
          console.log(this.cart[i].item);
          break;
        } else if (this.cart[i].type_id < this.itemId[midIndex].typeID) {
          backIndex = midIndex;
        } else if (this.cart[i].type_id > this.itemId[midIndex].typeID) {
          frontIndex = midIndex;
        }
        if (this.cart[i].type_id == this.itemId[backIndex].typeID) {
          this.cart[i].item = this.itemId[backIndex];
          console.log(this.cart[i].item);
          break;
        }
      } while (frontIndex != backIndex);
    }
  }
}
