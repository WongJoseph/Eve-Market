import {Component, OnDestroy, OnInit} from '@angular/core';
import {Orders} from '../domain/orders';
import {Subscription} from 'rxjs/Subscription';
import {UpdateCartService} from '../service/update-cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnDestroy, OnInit {
  cart: Orders[];
  subscription: Subscription;

  constructor(private updateCartService: UpdateCartService) {
    this.subscription = this.updateCartService.getCart().subscribe( cart => this.cart = cart);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    // if (sessionStorage.getItem('cart')) {
    //   this.cart = JSON.parse(sessionStorage.getItem('cart'));
    // }
  }
}
