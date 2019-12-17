import {Component, OnInit} from '@angular/core';
import {ApiService} from '../core/api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {ResultFromSearch} from '../core/search';
import {FilteredCollections} from '../core/filtered-collections.model';


@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ItemsListComponent implements OnInit {


  constructor(private itemsService: ApiService, public actRoute: ActivatedRoute, public router: Router) {
    this.page = 0;
  }

  offsetDiff: number;
  prevPage = false;
  nextPage = false;
  page: number;
  itemsProcessed: number;
  filteredCollections: FilteredCollections;
  loading = true;
  offset: number;

  ngOnInit() {
    if (this.actRoute.snapshot.params['uuid']) {
      this.itemsService.listSingleItem(this.actRoute.snapshot.params['uuid']).subscribe((filteredCollections: FilteredCollections) => {
        this.filteredCollections = filteredCollections;
        if (this.filteredCollections.numberItemsProcessed > 50) {
          this.nextPage = true;
        } else if (this.filteredCollections.numberItems < 51) {
          this.itemsProcessed = this.filteredCollections.numberItems;
        }
        this.loading = false;
      });
    } else {
      alert('Error por favor volte atrás.');
    }
  }

  public onClick(page) {
    console.log('Função click page: ' + page);
    this.page = this.page + page;
    console.log('Função click this.page: ' + this.page);

    if (this.page > -1 && (this.itemsProcessed) === (this.filteredCollections.numberItems)) {
      this.loading = true;
      this.itemsService.listSingleItem(this.actRoute.snapshot.params['uuid'], this.page, this.offsetDiff)
        .subscribe((filteredCollections: FilteredCollections) => {
          this.filteredCollections = filteredCollections;
          this.itemsProcessed = this.itemsProcessed - this.offsetDiff;
          this.prevPage = true;
          this.nextPage = true;
        });
      this.loading = false;
    }
    if (this.page > -1 && (this.itemsProcessed) < (this.filteredCollections.numberItems)) {
      this.loading = true;
      this.itemsService.listSingleItem(this.actRoute.snapshot.params['uuid'], this.page)
        .subscribe((filteredCollections: FilteredCollections) => {
          this.filteredCollections = filteredCollections;
          if (this.page > 0 && page === -1) {
            this.itemsProcessed = this.itemsProcessed - 50;
            this.prevPage = true;
            this.nextPage = true;
          } else if (this.page === 0 && page === -1) {
            this.itemsProcessed = this.itemsProcessed - 50;
            this.prevPage = false;
            this.nextPage = true;
          } else if (this.page > 0 && page === 1 && ((this.itemsProcessed + 50) < (this.filteredCollections.numberItems))) {
            this.itemsProcessed = this.itemsProcessed + 50;
            this.prevPage = true;
            this.nextPage = true;
          } else if (this.page > 0 && page === 1 && ((this.itemsProcessed + 50) > (this.filteredCollections.numberItems))) {
            this.offsetDiff = this.filteredCollections.numberItems - this.itemsProcessed;
            this.itemsProcessed = this.itemsProcessed + this.offsetDiff;
            this.prevPage = true;
            this.nextPage = false;
          }
          this.loading = false;
        });
    }
  }
}
