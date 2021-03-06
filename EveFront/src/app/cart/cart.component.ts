import {Component, OnInit} from '@angular/core';
import {Orders} from '../domain/orders';
import {Regions} from '../domain/regions';
import {SearchItemService} from '../service/search-item.service';
import {UpdateCartService} from '../service/update-cart.service';
import {Subscription} from 'rxjs/Subscription';
import {Item} from '../domain/item';
import {HttpClient} from "@angular/common/http";
import {NavigationExtras, Params, Router} from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Orders[];
  subscription: Subscription;
  totalSum = 0;

  missingAlertMessageIndicator: boolean;
  tooManyAlertMessageIndicator: boolean;
  missingAlertMessage= "One or more of your saved orders no longer exists.";
  tooManyAlertMessage= "One or more of your saved orders no longer contains your requested amount.";

  constructor(private searchItemService: SearchItemService, private updateCartService: UpdateCartService,
              private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
    this.subscription = this.updateCartService.getCart()
      .subscribe(cart => {
        this.cart = cart;
        this.sum();
      });
    this.updateCartService.getMissingMessage().subscribe(indicator => {this.missingAlertMessageIndicator = indicator; console.log(indicator);});
    this.updateCartService.getTooManyMessage().subscribe(indicator => {this.tooManyAlertMessageIndicator = indicator; console.log(indicator);});
  }

  removeFromThisCart(index) {
    this.updateCartService.removeOrderFromCart(this.cart[index]);
  }

  removeFromCartAndRedirectRegion(index, region_id, type_id) {
    this.removeFromThisCart(index);
    let navigationExtras: NavigationExtras = {
      queryParams: {region_id: region_id, type_id: type_id},
      fragment: 'anchor'
    };
    this.router.navigate(['/search'], navigationExtras);
  }

  removeFromCartAndRedirectStation(index, region_id, station_id, type_id) {
    this.removeFromThisCart(index);
    let navigationExtras: NavigationExtras = {
      queryParams: {region_id: region_id, station_id: station_id, type_id: type_id},
      fragment: 'anchor'
    };
    setTimeout(()=> this.router.navigate(['/search'], navigationExtras) , 100);
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
