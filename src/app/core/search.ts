import {Items} from './items.model';

export class ResultFromSearch {
  public items: Items[];
  public description: string;
  public 'item-count': number;
  constructor(
    items: Items[],
    description: string,
    itemCount: number
  ) {
    this.description = description;
    this.items = items;
    this['item-count'] = itemCount;
  }
}
