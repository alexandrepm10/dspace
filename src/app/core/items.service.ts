import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, map, max, retry} from 'rxjs/operators';
import {Communities} from './communities.model';
import {Collections} from './collections.model';
import {Items} from './items.model';
import {ItemsDetail} from './item-detail.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private baseUrl = 'http://localhost:8080/rest/';
  public maxOffset: number;

  constructor(
    private http: HttpClient,
  ) {
  }

  listCommunities(): Observable<Communities[]> {
    const url = `${this.baseUrl + 'communities'}/`;
    return this.http.get<Communities[]>(url).pipe(retry(1));
  }

  listCollections(): Observable<Collections[]> {
    const url = `${this.baseUrl + 'collections'}/`;
    return this.http.get<Collections[]>(url).pipe(retry(1));
  }

  listSingleCollection(uuid): Observable<Collections[]> {
    const url = `${this.baseUrl + 'communities/' + uuid + '/collections'}/`;
    return this.http.get<Collections[]>(url).pipe(retry(1));
  }

  listItems(): Observable<Items[]> {
    const url = `${this.baseUrl + 'items'}/`;
    return this.http.get<Items[]>(url).pipe(retry(1));
  }

  listSingleItem(uuid): Observable<Items[]> {
    // this.maxOffset = countItems / 25;
    const url = `${this.baseUrl + 'collections/' + uuid + '/items?limit=25'}`;
    return this.http.get<Items[]>(url).pipe(retry(1));
  }

  listItemDetail(uuid): Observable<ItemsDetail[]> {
    // this.maxOffset = countItems / 25;
    const url = `${this.baseUrl + 'items/' + uuid + '/metadata'}`;
    return this.http.get<ItemsDetail[]>(url).pipe(retry(1));
  }
}
