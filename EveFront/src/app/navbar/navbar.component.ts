import {Component, OnDestroy, OnInit} from '@angular/core';
import {Orders} from '../domain/orders';
import {Subscription} from 'rxjs/Subscription';
import {UpdateCartService} from '../service/update-cart.service';
import {Router} from "@angular/router";
import {AuthenticationService} from "../service/authentication.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnDestroy, OnInit {
  cart: Orders[];
  subscription: Subscription;

  constructor(private updateCartService: UpdateCartService,
              private authservice: AuthenticationService,
              private router: Router) {
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
  logout() {
    this.authservice.logout()
      .subscribe(data => {
          this.router.navigate(['/login']);
        }
      );
  }
}
