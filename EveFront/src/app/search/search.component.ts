import {Component, OnInit} from '@angular/core';
import {SearchItemService} from '../service/search-item.service';
import {Orders} from '../domain/orders';
import {Observable} from 'rxjs/Observable';
import {Regions} from '../domain/regions';
import {Stations} from '../domain/stations';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [NgbDropdownConfig]
})
export class SearchComponent implements OnInit {
  orders: Orders[] = [];
  cart: Orders[];
  regions: Regions[] = [];
  stations: Stations[] = [];
  regionID: number;
  searchName: string;
  itemId = [];
  selectItem: any;
  model: any;
  sortByPrice = true;
  searched = false;
  pages: Orders[];
  page = 1;
  quantity = 0;

  constructor(private searchItemService: SearchItemService,
              config: NgbDropdownConfig) {
    config.autoClose = 'outside';
  }

  ngOnInit() {
    this.searchItemService.getItemId()
      .subscribe(itemId => this.itemId = itemId);
    this.searchItemService.getRegionId()
      .subscribe(regions => this.regions = regions);
    this.searchItemService.getStationId()
      .subscribe(stations => this.stations = stations);

    if (sessionStorage.getItem('cart')) {
      this.cart = JSON.parse(sessionStorage.getItem('cart'));
    } else {this.cart = []; }

  }

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .map(term => term.length < 2 ? []
        : this.itemId.filter(v => v.typeName.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
  formatter = (x: {typeName: string}) => x.typeName;

  getOrder() {
    this.searchName = this.model.typeName;
    this.selectItem = this.model;
    this.searched = true;
    this.searchItemService.getOrders(this.regionID, this.model.typeID)
      .subscribe(orders => this.orders = orders,
        error => {},
        () => this.setPages()
      );
    this.page = 1;
  }

  setPages() {
    setTimeout(() => {
      const begin = (this.page - 1) * 10;
      let end = begin + 10;
      if (end > this.orders.length) {
        end = this.orders.length;
      }
      this.pages = this.orders.slice(begin, end);
    }, 100);
  }

  addToCart(index) {
    if (this.pages[index].quantity != null) {
      this.cart.push(this.pages[index]);
      sessionStorage.setItem('cart', JSON.stringify(this.cart));
    }
    alert('Added to cart');
    return false;
  }

  searchStation(id) {
    return this.stations.find(item => item.stationID === id);
  }

  sortPrice() {
    if (this.sortByPrice) {
      this.orders.sort(function(order1, order2) {return order1.price - order2.price; });
      this.sortByPrice = false;
    } else {
      this.orders.reverse();
      this.sortByPrice = true;
    }
    this.setPages();
    return false;
  }

  changeQuantity(ind, quantity) {
    if (this.pages[ind].volume_remain < quantity) {
      alert('Not enough quantity');
    } else {
      this.pages[ind].quantity = quantity;
    }
  }

  enterAmount(ind, event, quantity) {
    if (event.keyCode === 13) {
      if (this.pages[ind].volume_remain < quantity) {
        alert('Not enough quantity');
      } else  {
        this.pages[ind].quantity = quantity;
      }
    }

  }
}
