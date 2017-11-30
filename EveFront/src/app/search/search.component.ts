import {Component, OnInit} from '@angular/core';
import {SearchItemService} from '../service/search-item.service';
import {Orders} from '../domain/orders';
import {Observable} from 'rxjs/Observable';
import {Regions} from '../domain/regions';
import {Stations} from '../domain/stations';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';
import {Subject} from 'rxjs/Subject';
import {debounceTime} from 'rxjs/operator/debounceTime';
import {Item} from '../domain/item';
import {UpdateCartService} from '../service/update-cart.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [NgbDropdownConfig]
})
export class SearchComponent implements OnInit {
  orders: Orders[] = [];
  cart: Orders[] = [];
  itemId: Item[];
  regions: Regions[] = [];
  stations: Stations[] = [];
  selectedRegionId: number;
  searchName: string;
  selectedItem: Item;
  model: any;
  sortByPrice = true;
  searched = false;
  pages: Orders[];
  page = 1;
  pageSize = 10;
  alertType = 'success';

  private message = new Subject<string>();

  alertMessage: string;

  constructor(private searchItemService: SearchItemService, private updateCartService: UpdateCartService,
              config: NgbDropdownConfig) {
    this.updateCartService.getCart().subscribe( cart => this.cart = cart);
    config.autoClose = 'outside';
  }

  ngOnInit() {
    this.updateCartService.getCartFromDB();

    this.message.subscribe((message) => this.alertMessage = message);
    debounceTime.call(this.message, 3000).subscribe(() => this.alertMessage = null);

    this.searchItemService.getItemId()
      .subscribe(itemId => this.itemId = itemId);
    this.searchItemService.getRegionId()
      .subscribe(regions => this.regions = regions);
    this.searchItemService.getStationId()
      .subscribe(stations => this.stations = stations);
  }

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .map(term => term.length < 2 ? []
        : this.itemId.filter(v => v.typeName.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
  formatter = (x: {typeName: string}) => x.typeName;

  getOrder() {
    this.searchName = this.model.typeName;
    this.selectedItem = this.model;
    this.searched = true;
    this.searchItemService.getOrders(this.selectedRegionId, this.model.typeID)
      .subscribe(orders => this.orders = orders,
        error => console.log('Error'),
        () => this.getStationName()
      );
    this.sortByPrice = true;
    this.page = 1;
  }

  setPages() {
    setTimeout(() => {
      const begin = (this.page - 1) * this.pageSize;
      let end = begin + this.pageSize;
      if (end > this.orders.length) {
        end = this.orders.length;
      }
      this.pages = this.orders.slice(begin, end);
    }, 100);
  }

  addToCart(index, addButton) {
    if (this.pages[index].quantity != null) {
      this.alertType = 'success';
      if (this.checkCart(this.pages[index])) {
        if (this.pages[index].quantity == 0) {
          this.updateCartService.removeOrderFromCart(this.pages[index]);
          addButton.innerHTML = 'Add';
          this.message.next('Item(s) deleted from cart');
        } else {
          this.updateCartService.addOrderToCart(this.pages[index]);
          addButton.innerHTML = 'Update';
          this.message.next('Item quantity updated in cart');
        }
      } else {
        this.updateCartService.addOrderToCart(this.pages[index]);
        this.message.next('Item added to cart');
        addButton.innerHTML = 'Update';
      }
    } else {
      this.alertType = 'warning';
      this.message.next('Select quantity to add to cart');
    }
    return false;
  }

  getStationName() {
    for (let i = 0; i < this.orders.length; i++) {
      this.orders[i].item = this.selectedItem;
      this.orders[i].region_id = this.selectedRegionId;
      const station = this.stations.find(item => item.stationID === this.orders[i].location_id);
      if (station === undefined) {
        let tempStation: any;
        this.searchItemService.getNameById(this.orders[i].location_id).subscribe(reponse => tempStation = reponse,
          error => console.log('Error'),
          () => this.orders[i].stationName = tempStation[0].name);
      } else {
        this.orders[i].stationName = station.stationName;
      }
    }
    this.setPages();
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
      this.alertType = 'warning';
      this.message.next('Not enough quantity');
    } else {
      this.pages[ind].quantity = quantity;
    }
  }

  enterAmount(ind, event, quantity, myDrop) {
    if (event.keyCode === 13) {
      if (this.pages[ind].volume_remain < quantity) {
        this.alertType = 'warning';
        this.message.next('Not enough quantity');
      } else if (quantity < 0) {
        this.alertType = 'warning';
        this.message.next('Quantity can not be negative');
      } else  {
        this.pages[ind].quantity = quantity;
        myDrop.close();
      }
    }
  }

  checkCart(order) {
    for (let i = 0; i < this.cart.length; i++) {
      if (this.cart[i].order_id === order.order_id) {
        return true;
      }
    }
  }
}
