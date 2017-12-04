import {Component, OnDestroy, OnInit} from '@angular/core';
import {Orders} from '../domain/orders';
import {Subscription} from 'rxjs/Subscription';
import {UpdateCartService} from '../service/update-cart.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../service/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnDestroy, OnInit {
  cart: Orders[];
  totalSum = 0;
  subscription: Subscription;
  loggedIn: any;

  constructor(private updateCartService: UpdateCartService,
              private authservice: AuthenticationService,
              private router: Router) {
    this.subscription = this.updateCartService.getCart().subscribe(cart => this.cart = cart);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.authservice.getUser();
    this.subscription = this.authservice.getUser().subscribe(user => this.loggedIn = user);
  }

  logout() {
    this.authservice.logout()
      .subscribe(data => {
          this.router.navigate(['/login']);
        }
      );
  }

  sum() {
    let currentTotal = 0;
    for (let i = 0; i < this.cart.length; i++) {
      currentTotal += this.cart[i].price * this.cart[i].quantity;
    }
    this.totalSum = currentTotal;
  }
}
