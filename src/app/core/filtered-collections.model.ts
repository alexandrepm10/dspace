import {Items} from './items.model';

export class FilteredCollections {
  public name: string;
  public uuid: string;
  public items: Items[];
  public numberItems: number;
  public numberItemsProcessed: number;
}
