import {Items} from './items.model';

export class ResultFromSearch {
  public items: Items[];
  public description: string;
  constructor(
    items: Items[],
    description: string
  ) {
    this.description = description;
    this.items = items;
  }

}
