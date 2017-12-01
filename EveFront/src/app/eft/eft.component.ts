import {Component, OnInit} from '@angular/core';
import {SearchItemService} from '../service/search-item.service';
import {Item} from '../domain/item';
import {Orders} from '../domain/orders';

@Component({
  selector: 'app-eft',
  templateUrl: './eft.component.html',
  styleUrls: ['./eft.component.css']
})
export class EftComponent implements OnInit {

  itemId: Item[];
  validEFT = true;
  EFT: string;
  ship: string;
  title: string;
  highSlot: string[];
  midSlot: string[];
  lowSlot: string[];
  rigSlot: string[];
  droneSlot: string[];
  chargeSlot: string[];
  highSlotOrder: Orders[];
  midSlotOrder: Orders[];
  lowSlotOrder: Orders[];
  rigSlotOrder: Orders[];
  droneSlotOrder: Orders[];
  chargeSlotOrder: Orders[];

  constructor(private searchItemService: SearchItemService) {
  }

  ngOnInit() {
    this.searchItemService.getItemId()
      .subscribe(itemId => this.itemId = itemId);
  }

  parseEFT() {
    setTimeout(() => {
      if (!this.EFT.match('\\[.*\\]')) {
        this.validEFT = false;
        return;
      }
      this.validEFT = true;
      const firstLine = this.EFT.match('\\[.*\\]')[0].slice(1, this.EFT.match('\\[.*\\]')[0].length - 1).split(', ');
      this.ship = firstLine[0];
      this.title = firstLine[1];
      const body = this.EFT.slice(this.EFT.indexOf('\n'), this.EFT.length);
      const s = body.replace(/, /gi, '\n');
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
      // console.log(this.title);
      // console.log(this.ship);
      // console.log(s);
      // console.log(this.highSlot);
    });
  }
}
