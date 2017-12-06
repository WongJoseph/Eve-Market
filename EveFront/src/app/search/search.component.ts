import {AfterViewInit, Component, OnInit} from '@angular/core';
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
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {Location} from '@angular/common';


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
  selectedStationID: number;
  searchName: string;
  selectedItem: Item;
  model: any;
  sortByPrice = true;
  searched = false;
  pages: Orders[];
  page = 1;
  pageSize = 10;
  alertType = 'success';
  sortIcon: String;

  private message = new Subject<string>();
  alertMessage: string;

  tooManyCount: number;
  tooManyAlertMessageIndicator: boolean;
  tooManyAlertMessage = 'One or more of the orders from this search has more items in the cart than are available.';

  constructor(private searchItemService: SearchItemService, private updateCartService: UpdateCartService,
              config: NgbDropdownConfig, private route: ActivatedRoute, private location: Location) {
    config.autoClose = 'outside';

    this.tooManyAlertMessageIndicator = false;
    this.tooManyCount = 0;
    this.updateCartService.getCartFromDB();
    this.selectedStationID = 0;
  }

  ngOnInit() {

    this.updateCartService.getCart().subscribe(cart => {
      this.cart = cart;
      this.insertCartOrders();
      this.setPages();
    });

    // if (this.route.snapshot.queryParams['region_id'] != undefined || this.route.snapshot.queryParams['type_id'] != undefined) {
    //   this.selectedRegionId = this.route.snapshot.queryParams['region_id'];
    //   if(this.route.snapshot.queryParams['station_id'] != undefined) {
    //     this.selectedStationID = this.route.snapshot.queryParams['station_id'];
    //   } else {this.selectedStationID = null;}
    //   this.searchItemService.getItemById(this.route.snapshot.queryParams['type_id']).subscribe(item => {
    //     this.model=item;
    //     this.getOrder()});
    // }

    setTimeout(() => {
      if (this.route.snapshot.queryParams['region_id'] != undefined || this.route.snapshot.queryParams['type_id'] != undefined) {
        this.selectedRegionId = this.route.snapshot.queryParams['region_id'];
        this.selectRegion();
        if (this.route.snapshot.queryParams['station_id'] != undefined) {
          this.selectedStationID = this.route.snapshot.queryParams['station_id'];
        } else {
          this.selectedStationID = 0;
        }
        this.searchItemService.getItemById(this.route.snapshot.queryParams['type_id']).subscribe(item => {
          this.model = item;
          this.getOrder();
        });
      }
    }, 500);

    this.message.subscribe((message) => this.alertMessage = message);
    debounceTime.call(this.message, 3000).subscribe(() => this.alertMessage = null);

    this.searchItemService.getItemId()
      .subscribe(itemId => this.itemId = itemId);
    this.searchItemService.getRegionId()
      .subscribe(regions => this.regions = regions);
    this.searchItemService.getStationId()
      .subscribe(stations => {
        this.stations = stations;
      });

  }

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .map(term => term.length < 2 ? []
        : this.itemId.filter(v => v.typeName.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));
  formatter = (x: { typeName: string }) => x.typeName;

  getOrder() {
    console.log('here I am');
    this.searchName = this.model.typeName;
    this.selectedItem = this.model;
    this.searched = true;
    this.tooManyAlertMessageIndicator = false;
    this.searchItemService.getOrders(this.selectedRegionId, this.model.typeID)
      .subscribe(orders => {
          this.orders = orders;
          if (this.selectedStationID != 0) {
            console.log(this.selectedStationID + 'd');
            this.orders = this.orders.filter(orders => orders.location_id == this.selectedStationID);
            console.log(this.orders);
          }
        },
        error => console.log('Error'),
        () => {
          this.getStationName();
          this.insertCartOrders();
          this.setPages();
        }
      );
    this.sortIcon = 'oi oi-elevator';
    this.sortByPrice = true;
    this.page = 1;
    if (this.selectedStationID != 0) {
      console.log(this.selectedStationID);
      this.location.replaceState('/search', 'region_id=' + this.selectedRegionId + '&station_id=' + this.selectedStationID + '&type_id=' + this.selectedItem.typeID);
    } else {
      this.location.replaceState('/search', 'region_id=' + this.selectedRegionId + '&type_id=' + this.selectedItem.typeID);
    }
  }

  selectRegion() {
    this.selectedStationID = 0;
    this.searchItemService.getStationId()
      .subscribe(stations => {
        this.stations = stations.filter(stations => stations.regionID == this.selectedRegionId);
        this.sortStation();
      });
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

  addToCart(index) {
    if (this.pages[index].quantity != null) {
      if (this.pages[index].quantity > this.pages[index].volume_remain) {
        this.alertType = 'warning';
        this.message.next('Not enough quantity');
        return;
      }
      this.alertType = 'success';
      this.pages[index].quantity_too_big = false;
      this.tooManyCount = this.tooManyCount - 1;
      if (this.tooManyCount <= 0) {
        this.tooManyAlertMessageIndicator = false;
      }
      if (this.checkCart(this.pages[index])) {
        if (this.pages[index].quantity == 0) {
          this.updateCartService.removeOrderFromCart(this.pages[index]);
          this.pages[index].quantity = null;
          this.message.next('Item(s) deleted from cart');
        } else {
          this.updateCartService.addOrderToCart(this.pages[index]);
          this.message.next('Item quantity updated in cart');
        }
      } else {
        this.updateCartService.addOrderToCart(this.pages[index]);
        this.message.next('Item added to cart');
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
        this.searchItemService.getNameById(this.orders[i].location_id).subscribe(response => tempStation = response,
          error => console.log('Error'),
          () => this.orders[i].stationName = tempStation[0].name);
      } else {
        this.orders[i].stationName = station.stationName;
      }
    }
  }

  sortPrice() {
    if (this.sortByPrice) {
      this.orders.sort(function (order1, order2) {
        return order1.price - order2.price;
      });
      this.sortByPrice = false;
      this.sortIcon = 'oi oi-caret-bottom';
    } else {
      this.orders.reverse();
      this.sortByPrice = true;
      this.sortIcon = 'oi oi-caret-top';
    }
    this.setPages();
    return false;
  }

  sortStation() {
    this.stations.sort(function (station1, station2) {
      if (station1.stationName < station2.stationName) {
        return -1;
      } else if (station1.stationName > station2.stationName) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  changeQuantity(ind, quantity) {
    this.pages[ind].quantity = quantity;
  }

  enterAmount(ind, event, quantity, myDrop) {
    if (event.keyCode === 13) {
      if (isNaN(quantity) || !(Math.ceil(parseFloat(quantity)) === parseFloat(quantity))) {
        this.alertType = 'warning';
        this.message.next('Enter a valid quantity');
      } else if (this.pages[ind].volume_remain < quantity) {
        this.alertType = 'warning';
        this.message.next('Not enough quantity');
      } else if (quantity < 0) {
        this.alertType = 'warning';
        this.message.next('Quantity can not be negative');
      } else {
        this.pages[ind].quantity = parseInt(quantity, 10);
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

  insertCartOrders() {
    for (let i = 0; i < this.cart.length; i++) {
      for (let j = 0; j < this.orders.length; j++) {
        if (this.cart[i].order_id == this.orders[j].order_id) {
          this.orders[j].quantity = this.cart[i].quantity;
          this.orders[j].quantity_too_big = this.cart[i].quantity_too_big;
          if (this.cart[i].quantity_too_big) {
            this.tooManyAlertMessageIndicator = true;
            this.tooManyCount = this.tooManyCount + 1;
          }
          break;
        }
      }
    }
  }

  alertColor(order: Orders): String {
    if (order.quantity_too_big) {
      return 'table-warning';
    } else {
      return '';
    }
  }
}
