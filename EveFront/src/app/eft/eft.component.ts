import {Component, OnInit} from '@angular/core';
import {SearchItemService} from '../service/search-item.service';
import {Item} from '../domain/item';
import {Orders} from '../domain/orders';
import {UpdateCartService} from '../service/update-cart.service';
import {BuildService} from '../service/build.service';
import {Build} from '../domain/build';

@Component({
  selector: 'app-eft',
  templateUrl: './eft.component.html',
  styleUrls: ['./eft.component.css']
})
export class EftComponent implements OnInit {

  currentCart: Orders[];
  cart: Orders[] = [];
  total = 0;
  itemId: Item[];
  validEFT = true;
  EFT: string;
  shipName: string;
  ship: any = [];
  title: string;
  highSlot: any;
  midSlot: any;
  lowSlot: any;
  rigSlot: any;
  droneSlot: any;
  chargeSlot: any;
  selectedTradeHub: any;
  buildList: Build[] = [];
  notEnoughIndicator: boolean;
  showIndicator: boolean;

  tradeHub = [
    {
      typeName: 'Jita',
      region_id: 10000002,
      stationName: 'Jita IV - Moon 4 - Caldari Navy Assembly Plant',
      location_id: 60003760
    },
    {
      typeName: 'Amarr',
      region_id: 10000043,
      stationName: 'Amarr VIII (Oris) - Emperor Family Academy',
      location_id: 60008494
    },
    {
      typeName: 'Rens',
      region_id: 10000030,
      stationName: 'Rens VI - Moon 8 - Brutor Tribe Treasury',
      location_id: 60004588
    },
    {
      typeName: 'Dodixie',
      region_id: 10000032,
      stationName: 'Dodixie IX - Moon 20 - Federation Navy Assembly Plant',
      location_id: 60011866
    },
    {
      typeName: 'Hek',
      region_id: 10000042,
      stationName: 'Hek VIII - Moon 12 - Boundless Creation Factory',
      location_id: 60005686
    }
  ];

  constructor(private searchItemService: SearchItemService,
              private updateCartService: UpdateCartService,
              private buildService: BuildService) {
    this.buildService.getBuild().subscribe(builds => {this.buildList = builds; console.log(builds); });
    this.notEnoughIndicator=false;
    this.validEFT=true;

  }

  ngOnInit() {
    this.buildService.getBuildFromDB();
    this.searchItemService.getItemList()
      .subscribe(itemId => this.itemId = itemId);
    this.updateCartService.getCart().subscribe(cart => this.currentCart = cart)
  }

  parseEFT() {
    setTimeout(() => {
      this.showIndicator = false;
      if (!this.EFT.match('\\[.*\\]')) {
        this.validEFT = false;
        return;
      }
      if (this.selectedTradeHub == null) {
        return;
      }
      this.notEnoughIndicator = false;
      this.cart = [];
      this.total = 0;
      this.ship = [];
      this.validEFT = true;
      const firstLine = this.EFT.match('\\[.*\\]')[0].slice(1, this.EFT.match('\\[.*\\]')[0].length - 1).split(', ');
      this.shipName = firstLine[0];
      this.ship.push({typeName: firstLine[0], quantity: 1, item: null, price: 0});
      this.title = firstLine[1];
      const body = this.EFT.slice(this.EFT.indexOf('\n'), this.EFT.length);
      const s = body.replace(/,\s?/gi, '\n');
      const line = s.split('\n');
      const buildSlot = [
        this.highSlot = [],
        this.midSlot = [],
        this.lowSlot = [],
        this.rigSlot = [],
        this.droneSlot = [],
        this.chargeSlot = []
      ];
      let indexSlot = 0;
      for (let i = 1; i < line.length; i++) {
        if (line[i] === '') {
          indexSlot++;
          i++;
        }
        buildSlot[indexSlot].push(line[i]);
      }

      const count = [
        this.highSlot,
        this.midSlot,
        this.lowSlot,
        this.rigSlot
      ];
      indexSlot = 0;

      for (indexSlot; indexSlot < count.length; indexSlot++) {
        const unique = Array.from(new Set(count[indexSlot]));
        const object = [];
        for (let i = 0; i < unique.length; i++) {
          object.push({typeName: unique[i], quantity: 0, item: null, price: 0});
        }

        for (let i = 0; i < unique.length; i++) {
          for (let j = 0; j < count[indexSlot].length; j++) {
            if (unique[i] === count[indexSlot][j]) {
              object[i].quantity++;
            }
          }
        }
        switch (indexSlot) {
          case 0:
            this.highSlot = object;
            break;
          case 1:
            this.midSlot = object;
            break;
          case 2:
            this.lowSlot = object;
            break;
          case 3:
            this.rigSlot = object;
            break;
        }
      }

      let object = [];

      for (let i = 0; i < this.droneSlot.length; i++) {
        const x = this.droneSlot[i].lastIndexOf('x');
        const string = this.droneSlot[i];
        object.push({typeName: string.slice(0, x - 1), quantity: string.slice(x + 1, string.length), item: null, price: 0});
      }
      this.droneSlot = object;


      object = [];

      for (let i = 0; i < this.chargeSlot.length; i++) {
        const x = this.chargeSlot[i].lastIndexOf('x');
        const string = this.chargeSlot[i];
        object.push({typeName: string.slice(0, x - 1), quantity: string.slice(x + 1, string.length), item: null, price: 0});
      }
      this.chargeSlot = object;
      let slots= [this.ship, this.highSlot, this.midSlot, this.lowSlot, this.rigSlot, this.droneSlot, this.chargeSlot];
      for(let slot of slots) {
        if (this.notEnoughIndicator) {
          return;
        } else if (!this.validEFT) {
          return;
        }
        this.getTypeId(slot);
        this.getOrder(slot);
      }
      this.showIndicator=true;
      if (this.notEnoughIndicator) {
        this.showIndicator=false;
      } else if (!this.validEFT) {
        this.showIndicator=false;
      }
    });
  }

  calculatePrice(slotItem, slotOrder) {
      let remainingQuantity = slotItem.quantity;
      let totalPrice = 0;
     for (let orderIndex =0; orderIndex < slotOrder.length; orderIndex++) {
        if (slotOrder[orderIndex].location_id !== this.selectedTradeHub.location_id) {
          continue;
        }
        let order = this.currentCart.filter(order => order.order_id == slotOrder[orderIndex].order_id)[0];
        if (order)
        {
          slotOrder[orderIndex].volume_remain -= order.quantity;
        }
        if (slotOrder[orderIndex].volume_remain < remainingQuantity) {
          totalPrice += slotOrder[orderIndex].volume_remain * slotOrder[orderIndex].price;
          remainingQuantity -= slotOrder[orderIndex].volume_remain;
          const order = slotOrder[orderIndex];
          order.quantity = order.volume_remain;
          order.region_id = this.selectedTradeHub.region_id;
          order.stationName = this.selectedTradeHub.stationName;
          this.cart.push(order);
        } else {
          totalPrice += remainingQuantity * slotOrder[orderIndex].price;
          const order = slotOrder[orderIndex];
          order.quantity = remainingQuantity;
          order.region_id = this.selectedTradeHub.region_id;
          order.stationName = this.selectedTradeHub.stationName;
          this.cart.push(order);
          remainingQuantity=0;
          break;
        }
      }
      if (remainingQuantity != 0) {
        console.log("here");
        this.notEnoughIndicator = true;
        this.showIndicator = false;
        return;
      }
      slotItem.price = totalPrice;
      this.total += slotItem.price;
  }

  getOrder(slot) {
    for (let i = 0; i < slot.length; i++) {
      this.searchItemService.getOrders(this.selectedTradeHub.region_id, slot[i].item.typeID)
        .subscribe(orders => {
          orders.sort(function (order1, order2) {
            return order1.price - order2.price;
          });
          this.calculatePrice(slot[i], orders);
        });
    }
  }

  getTypeId(slot) {
    for (let i = 0; i < slot.length; i++) {
      slot[i].item = this.filterTypeName(slot[i].typeName);
    }
  }

  filterTypeName(item) {
    for (let i = 0; i < this.itemId.length; i++) {
      if (this.itemId[i].typeName == item) {
        return this.itemId[i];
      }
    }
    this.validEFT = false;
  }

  addToCart() {
    for (const order of this.cart) {
      this.updateCartService.addOrderToCart(order);
    }
  }

  saveBuild() {
    const build = {
      buildname: this.shipName + ' - ' + this.title,
      eftString: this.EFT
    };
    this.buildService.saveBuild(build);
  }
}
