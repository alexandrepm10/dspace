import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Communities } from './communities.model';
import { Collections } from './collections.model';
import { Items } from './items.model';
import { ItemsDetail } from './item-detail.model';
import { News } from './news';
import { ResultFromSearch } from './result-from-search.model';
import { Bitstream } from './bitstream.model';
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
  // Define API
  apiURL = 'http://localhost:3000';

  public maxOffset: number;

  constructor(
    private http: HttpClient,
  ) {
  }

  listCommunities(): Observable<Communities[]> {
    return this.http.get<Communities[]>('/rest/communities/').pipe(
      retry(1)
    );
  }

  listCollections(): Observable<Collections[]> {
    return this.http.get<Collections[]>('/rest/collections/').pipe(retry(1));
  }

  listSingleCollection(uuid): Observable<Collections[]> {
    return this.http.get<Collections[]>('/rest/communities/' + uuid + '/collections').pipe(retry(1));
  }

  listItems(): Observable<Items[]> {
    return this.http.get<Items[]>('/rest/items/').pipe(retry(1));
  }

  listSingleItem(uuid): Observable<Items[]> {
    // this.maxOffset = countItems / 25;
    const url = this.baseUrl + 'collections/' + uuid + '/items?limit=50&expand=metadata%2Cbitstreams';
    return this.http.get<Items[]>(url).pipe(retry(1));
  }

  listItemDetail(uuid): Observable<ItemsDetail[]> {
    // this.maxOffset = countItems / 25;
    const url = `${this.baseUrl + 'items/' + uuid + '/metadata'}`;
    return this.http.get<ItemsDetail[]>(url).pipe(retry(1));
  }

  listItemDetailBitstream(uuid): Observable<Bitstream[]> {
    // this.maxOffset = countItems / 25;
    const url = `${this.baseUrl + 'items/' + uuid + '/bitstreams'}`;
    return this.http.get<Bitstream[]>(url).pipe(retry(1));
  }

  searchItems(obj): Observable<Items[]> {
    const url = `${this.baseUrl + 'items/find-by-metadata-field/'}`;
    return this.http.post<Items[]>(url, obj).pipe();
  }

  searchWildItems(map): Observable<ResultFromSearch> {
    const url = '/rest/' +
      'filtered-items?query_field%5B%5D=' + map.get('queryField') +
      '&query_op%5B%5D=' + map.get('queryVop') +
      '&query_val%5B%5D=' + map.get('queryVal') +
      '&collSel%5B%5D=' +
      '&limit=' + map.get('limit') +
      '&offset=' + map.get('offset') +
      '&expand=parentCollection%2Cmetadata%2Cbitstreams&filters=none';
    return this.http.get<ResultFromSearch>(url).pipe(retry(1));
  }

  // -------------------------------------------------------
  // -------------------------------------------------------
  // ----------------    NEWS    ---------------------------
  // -------------------------------------------------------
  // -------------------------------------------------------


  // HttpClient API get() method => Fetch news list
  getNews(): Observable<News[]> {
    return this.http.get<News[]>(this.apiURL + '/news').pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // HttpClient API get() method => particular news
  getSingleNews(id): Observable<News> {
    return this.http.get<News>(this.apiURL + '/news/' + id).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // HttpClient API put() method => Update patient
  updateNews(id, news) {
    return this.http.put(this.apiURL + '/news?id=' + id, news).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // HttpClient API post() method => Create patient
  createNews(news) {
    return this.http.post(this.apiURL + '/news', news).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }


  // Error handling
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}

