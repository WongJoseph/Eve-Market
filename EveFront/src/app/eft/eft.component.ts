import {Component, OnInit} from '@angular/core';
import {SearchItemService} from '../service/search-item.service';
import {Item} from '../domain/item';
import {Orders} from '../domain/orders';
import {UpdateCartService} from '../service/update-cart.service';
import {BuildService} from '../service/build.service';

@Component({
  selector: 'app-eft',
  templateUrl: './eft.component.html',
  styleUrls: ['./eft.component.css']
})
export class EftComponent implements OnInit {

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
  shipOrder: Orders[][] = [];
  highSlotOrder: Orders[][] = [];
  midSlotOrder: Orders[][] = [];
  lowSlotOrder: Orders[][] = [];
  rigSlotOrder: Orders[][] = [];
  droneSlotOrder: Orders[][] = [];
  chargeSlotOrder: Orders[][] = [];
  selectedTradeHub: any;

  tradeHub = [
    {
      name: 'Jita',
      region_id: 10000002,
      stationName: 'Jita IV - Moon 4 - Caldari Navy Assembly Plant',
      location_id: 60003760
    },
    {
      name: 'Amarr',
      region_id: 10000043,
      stationName: 'Amarr VIII (Oris) - Emperor Family Academy',
      location_id: 60008494
    },
    {
      name: 'Rens',
      region_id: 10000030,
      stationName: 'Rens VI - Moon 8 - Brutor Tribe Treasury',
      location_id: 60004588
    },
    {
      name: 'Dodixie',
      region_id: 10000032,
      stationName: 'Dodixie IX - Moon 20 - Federation Navy Assembly Plant',
      location_id: 60011866
    },
    {
      name: 'Hek',
      region_id: 10000042,
      stationName: 'Hek VIII - Moon 12 - Boundless Creation Factory',
      location_id: 60005686
    }
  ];

  constructor(private searchItemService: SearchItemService,
              private updateCartService: UpdateCartService,
              private buildService: BuildService) {
  }

  ngOnInit() {
    this.updateCartService.getCartFromDB();
    this.searchItemService.getItemId()
      .subscribe(itemId => this.itemId = itemId);
  }

  click() {
    this.buildService.getBuild();
  }

  parseEFT() {
    setTimeout(() => {
      if (!this.EFT.match('\\[.*\\]')) {
        this.validEFT = false;
        return;
      }
      if (this.selectedTradeHub == null) {
        return;
      }

      this.cart = [];
      this.total = 0;
      this.ship = [];
      this.validEFT = true;
      const firstLine = this.EFT.match('\\[.*\\]')[0].slice(1, this.EFT.match('\\[.*\\]')[0].length - 1).split(', ');
      this.shipName = firstLine[0];
      this.ship.push({name: firstLine[0], quantity: 1, item: null, price: 0});
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
          object.push({name: unique[i], quantity: 0, item: null, price: 0});
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
        object.push({name: string.slice(0, x - 1), quantity: string.slice(x + 1, string.length), item: null, price: 0});
      }
      this.droneSlot = object;


      object = [];

      for (let i = 0; i < this.chargeSlot.length; i++) {
        const x = this.chargeSlot[i].lastIndexOf('x');
        const string = this.chargeSlot[i];
        object.push({name: string.slice(0, x - 1), quantity: string.slice(x + 1, string.length), item: null, price: 0});
      }
      this.chargeSlot = object;

      this.getTypeId(this.ship);
      this.getTypeId(this.highSlot);
      this.getTypeId(this.midSlot);
      this.getTypeId(this.lowSlot);
      this.getTypeId(this.rigSlot);
      this.getTypeId(this.droneSlot);
      this.getTypeId(this.chargeSlot);

      this.shipOrder = [];
      this.highSlotOrder = [];
      this.midSlotOrder = [];
      this.lowSlotOrder = [];
      this.rigSlotOrder = [];
      this.droneSlotOrder = [];
      this.chargeSlotOrder = [];

      this.getOrder(this.ship, this.shipOrder);
      this.getOrder(this.highSlot, this.highSlotOrder);
      this.getOrder(this.midSlot, this.midSlotOrder);
      this.getOrder(this.lowSlot, this.lowSlotOrder);
      this.getOrder(this.rigSlot, this.rigSlotOrder);
      this.getOrder(this.droneSlot, this.droneSlotOrder);
      this.getOrder(this.chargeSlot, this.chargeSlotOrder);
    });
  }

  calculatePrice(slot, slotOrder) {
    for (const i of slot) {
      let remainingQuantity = i.quantity;
      let totalPrice = 0;
      let ordersIndex = 0;
      let orderIndex = 0;

      while (slotOrder[ordersIndex][0].type_id !== i.item.typeID) {
        ordersIndex++;
      }

      while (remainingQuantity > 0) {
        while (slotOrder[ordersIndex][orderIndex].location_id !== this.selectedTradeHub.location_id) {
          orderIndex++;
        }
        if (slotOrder[ordersIndex][orderIndex].volume_remain < remainingQuantity) {
          totalPrice += slotOrder[ordersIndex][orderIndex].volume_remain * slotOrder[ordersIndex][orderIndex].price;
          remainingQuantity -= slotOrder[ordersIndex][orderIndex].volume_remain;
          const order = slotOrder[ordersIndex][orderIndex];
          order.quantity = order.volume_remain;
          order.region_id = this.selectedTradeHub.region_id;
          order.stationName = this.selectedTradeHub.stationName;
          this.cart.push(order);
          orderIndex++;
        } else {
          totalPrice += remainingQuantity * slotOrder[ordersIndex][orderIndex].price;
          const order = slotOrder[ordersIndex][orderIndex];
          order.quantity = remainingQuantity;
          order.region_id = this.selectedTradeHub.region_id;
          order.stationName = this.selectedTradeHub.stationName;
          this.cart.push(order);
          remainingQuantity = 0;
        }
        i.price = totalPrice;
      }
      this.total += i.price;
    }
  }

  getOrder(slot, slotOrder) {
    for (let i = 0; i < slot.length; i++) {
      this.searchItemService.getOrders(this.selectedTradeHub.region_id, slot[i].item.typeID)
        .subscribe(orders => {
            slotOrder.push(orders);
            for (let i of slotOrder) {
              i.sort(function (order1, order2) {
                return order1.price - order2.price;
              });
            }
          },
          () => {
            console.log('Error, recalulate.');
            this.parseEFT();
          });
    }
    setTimeout(() => {
      this.calculatePrice(slot, slotOrder);
    }, 2000);
  }

  getTypeId(slot) {
    for (let i = 0; i < slot.length; i++) {
      slot[i].item = this.filterTypeName(slot[i].name);
    }
  }

  filterTypeName(item) {
    for (let i = 0; i < this.itemId.length; i++) {
      if (this.itemId[i].typeName == item) {
        return this.itemId[i];
      }
    }
  }

  addToCart() {
    for (const order of this.cart) {
      this.updateCartService.addOrderToCart(order);
    }
  }

  saveBuild() {

  }
}
