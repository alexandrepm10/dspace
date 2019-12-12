import {Items} from './items.model';

export class ResultFromSearch {
  public items: Items[];
  constructor(
    items: Items[]
  ) {
    this.items = items;
  }

}
