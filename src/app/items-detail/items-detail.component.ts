import {Component, OnInit} from '@angular/core';
import {ItemsService} from '../core/items.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ItemsDetail} from '../core/item-detail.model';
import {Bitstream} from '../core/bitstream.model';

@Component({
  selector: 'app-items-detail',
  templateUrl: './items-detail.component.html',
  styleUrls: ['./items-detail.component.css'],

})
export class ItemsDetailComponent implements OnInit {

  constructor(private itemsService: ItemsService, public actRoute: ActivatedRoute, public router: Router) {
    this.itemsDetails = [];
  }

  itemUUID = this.actRoute.snapshot.params['uuid'];
  itemsDetails: ItemsDetail[];
  itemsDetailsBitstream: Bitstream[];
  service: string;

  ngOnInit() {
    if (this.actRoute.snapshot.params['uuid']) {
      // this.maxOffSet = this.actRoute.snapshot.params['countItems'] / 10;
      this.itemsService.listItemDetail(this.actRoute.snapshot.params['uuid']).subscribe((itemsDetails: ItemsDetail[]) => {
        this.itemsDetails = itemsDetails;
      });
      this.itemsService.listItemDetailBitstream(this.actRoute.snapshot.params['uuid']).subscribe((itemsDetailBitstream: Bitstream[]) => {
        this.itemsDetailsBitstream = itemsDetailBitstream;
        for (const el of this.itemsDetailsBitstream) {
          if (el.format === 'Adobe PDF') {
            this.service = el.retrieveLink;
          }
        }
      });
    }
  }
}
