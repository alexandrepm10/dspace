import {Component, OnInit} from '@angular/core';
import {ItemsService} from '../core/items.service';
import {Collections} from '../core/collections.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})

export class CollectionsComponent implements OnInit {


  constructor(private itemsService: ItemsService, public actRoute: ActivatedRoute, public router: Router) {
    this.collections = [];
  }

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
