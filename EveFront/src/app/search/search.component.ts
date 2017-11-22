import { Component, OnInit } from '@angular/core';
import {SearchItemService} from '../search-item.service';
import {Orders} from '../orders';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  orders: Orders[] = [];
  cart: Orders[] = [];
  itemId = [];
  model: any;
  sortByPrice = true;
  query = '';
  constructor(private searchItemService: SearchItemService) { }

  ngOnInit() {
    this.searchItemService.getItemId()
      .subscribe(itemId => this.itemId = itemId);
  }

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .map(term => term.length < 2 ? []
        : this.itemId.filter(v => v.typeName.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
  formatter = (x: {typeName: string}) => x.typeName;


  getOrder() {
    this.searchItemService.getOrders(this.model.typeID)
      .subscribe( orders => this.orders = orders);
  }

  addToCart(index) {
    this.cart.push(this.orders[index]);
  }

  removeFromCart(index) {
    this.cart.splice(index, 1);
  }

  sortPrice() {
    if (this.sortByPrice) {
      this.orders.sort(function(order1, order2) {return order1.price - order2.price; });
      this.sortByPrice = false;
    } else {
      this.orders.reverse();
      this.sortByPrice = true;
    }
  }
}
