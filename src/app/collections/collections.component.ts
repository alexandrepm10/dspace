import {Component, OnInit} from '@angular/core';
import {ItemsService} from '../core/items.service';
import {Collections} from '../core/collections.model';
import {ActivatedRoute, Router} from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class CollectionsComponent implements OnInit {


  constructor(private itemsService: ItemsService, public actRoute: ActivatedRoute, public router: Router) {
    this.collections = [];
  }

  columnsToDisplay = ['name', 'numberItems'];
  expandedElement: Collections | null;
  collections: Collections[];
  loading = true;

  ngOnInit() {

    if (this.actRoute.snapshot.params['uuid']) {
      this.itemsService.listSingleCollection(this.actRoute.snapshot.params['uuid']).subscribe((collections: Collections[]) => {
        this.collections = collections;
        this.loading = false;
      });
    } else {
      console.log('Erro: nenhum \'UUID\'');
    }
  }
}
