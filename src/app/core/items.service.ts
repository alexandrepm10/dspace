import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {retry} from 'rxjs/operators';
import {Communities} from './communities.model';
import {Collections} from './collections.model';
import {Items} from './items.model';
import {ItemsDetail} from './item-detail.model';
import {Search} from './search.model';
import {ItemsFromSearch} from './items-from-search.model';
import {ResultFromSearch} from './result-from-search.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/xml',
    Authorization: 'jwt-token'
  })
};

@Injectable({
  providedIn: 'root',
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

  searchItems(obj): Observable<Items[]> {
    const url = `${this.baseUrl + 'items/find-by-metadata-field/'}`;
    return this.http.post<Items[]>(url, obj).pipe();
  }

  searchWildItems(map): Observable<ResultFromSearch[]> {
    const url = `${this.baseUrl +
    'filtered-items?query_field%5B%5D=' + map.get('queryField') +
    '&query_op%5B%5D=' + map.get('queryVop') +
    '&query_val%5B%5D=' + map.get('queryVal') +
    '&collSel%5B%5D=' +
    '&limit=' + map.get('limit') +
    '&offset=' + map.get('offset') +
    '&expand=parentCollection%2Cmetadata%2Cbitstreams&filters=none'}`;
    // http://localhost:8080/rest/filtered-items?query_field%5B%5D=dc.title&query_op%5B%5D=contains&
    // query_val%5B%5D=estudo&collSel%5B%5D=&limit=100&offset=0&expand=parentCollection%2Cmetadata%2Cbitstreams&filters=none
    return this.http.get<ResultFromSearch[]>(url).pipe();
  }
}

