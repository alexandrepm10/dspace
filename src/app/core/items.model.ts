import {ItemsDetail} from './item-detail.model';

export class Items {
  public uuid: string;

  public name: string;

  public handle: string;

  public type: string;

  public link: string;

  public metadata: ItemsDetail[];

  constructor(
    uuid: string,
    name: string,
    handle: string,
    type: string,
    link: string,
    metadata: ItemsDetail[],
  ) {
    this.link = link;
    this.type = type;
    this.handle = handle;
    this.name = name;
    this.uuid = uuid;
    this.metadata = metadata;
  }
}


/*
"uuid": "01ea13a4-086c-413d-9a7c-6e4b20da9fbf",
        "name": "Lily on Hotel Bed",
        "handle": "123456789/14",
        "type": "item",
        "expand": [
            "metadata",
            "parentCollection",
            "parentCollectionList",
            "parentCommunityList",
            "bitstreams",
            "all"
        ],
        "lastModified": "2019-11-04 20:20:00.18",
        "parentCollection": null,
        "parentCollectionList": null,
        "parentCommunityList": null,
        "bitstreams": null,
        "archived": "true",
        "withdrawn": "false",
        "link": "/rest/items/01ea13a4-086c-413d-9a7c-6e4b20da9fbf",
        "metadata": null
 */
