import {Item} from './item';
import {Regions} from './regions';

export interface Orders {
  order_id: number;
  type_id: number;
  location_id: number;
  volume_total: number;
  volume_remain: number;
  min_volume: number;
  price: number;
  is_buy_order: boolean;
  duration: number;
  issued: string;
  range: string;
  quantity: number;
  item: Item;
  stationName: string;
  regionId: number;
}