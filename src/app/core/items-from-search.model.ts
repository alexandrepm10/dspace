import {Items} from './items.model';


export class ItemsFromSearch {
  constructor(
    public category: string,
    public description: string,
    public filterName: string,
    public itemCount: number,
    public itemFilterQueries: [],
    public items: Items[],
    public metadata: [],
    public queryAnnotation: string,
    public title: string,
    public unfilteredItemCount: number
  ) {
  }

}

/*
category: "Item Property Filters"
description: "This filter includes all items that matched ALL specified filters"
filter-name: "all_filters"
item-count: 5
itemFilterQueries: []
items: (5) [{…}, {…}, {…}, {…}, {…}]
metadata: []
query-annotation: "(dc.title contains estudo)"
title: "Matches all specified filters"
unfiltered-item-count: 5
 */
