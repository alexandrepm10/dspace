import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Communities } from './communities.model';
import { Collections } from './collections.model';
import { Items } from './items.model';
import { ItemsDetail } from './metadata.model';
import { News } from './news';
import { Event } from './event';
import { ResultFromSearch } from './search';
import { Bitstream } from './bitstream.model';
import { Status } from './status.model';
import { Search } from './search.model';
import { FilteredCollections } from './filtered-collections.model';


const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'en-US,en;q=0.9,pt;q=0.8',
    'cache-control': 'max-age=0'
  })
};

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private baseUrl = '/rest/';
  // Define API
  apiURL = 'http://localhost:3000';

  public maxOffset: number;

  private loggedInStatus = false;

  constructor(
    private http: HttpClient,
  ) {
  }


  //-----------------------------------
  //-------------- LOGIN --------------
  //-----------------------------------

  loginUser(user, pass) {
    return this.http.get(this.baseUrl + 'login?email=' + user + '&password=' + pass).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  setLoggedInStatus(value: boolean) {
    this.loggedInStatus = value;
  }

  get isLoggedInSetted() {
    return this.loggedInStatus;
  }

  isLoggedIn(): Observable<Status> {
    return this.http.get<Status>(this.baseUrl + 'status');
  }

  logout() {
    return this.http.get(this.baseUrl + 'logout');
  }

  //-----------------------------------
  //-----------------------------------

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

  listItems(): Observable<ResultFromSearch> {
    const url = `${this.baseUrl +
      'filtered-items?query_field%5B%5D=*' +
      '&query_op%5B%5D=contains' +
      '&query_val%5B%5D=' +
      '&collSel%5B%5D=' +
      '&limit=100' +
      '&offset=0' +
      '&expand=parentCollection%2Cmetadata%2Cbitstreams&filters=none'}`;
    return this.http.get<ResultFromSearch>(url).pipe(retry(1));
  }

  listSingleItem(uuid, page?, offset?): Observable<FilteredCollections> {
    var limit = 50;
    if (offSet == null || offSet == undefined) {
      if (page == null || page == 0) {
        var offSet = 0;
      } else if (page > 0) {
        var offSet = limit * page;
      } else if (page < -1) {
        var offSet = limit / page;
      }
    }
    console.log('api offset:' + offSet);
    const url = `${this.baseUrl +
      'filtered-collections/' + uuid +
      '?expand=items%2Cmetadata%2Cbitstreams&limit=' + limit +
      '&filters=&offset=' + offSet +
      '&show_fields%5B%5D=null&show_fields_bits%5B%5D=null'}`;
    return this.http.get<FilteredCollections>(url).pipe(retry(1));
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
    const url = `${this.baseUrl +
      'filtered-items?query_field%5B%5D=' + map.get('queryField') +
      '&query_op%5B%5D=' + map.get('queryVop') +
      '&query_val%5B%5D=' + map.get('queryVal') +
      '&collSel%5B%5D=' +
      '&limit=' + map.get('limit') +
      '&offset=' + map.get('offset') +
      '&expand=parentCollection%2Cmetadata%2Cbitstreams&filters=none'}`;
    return this.http.get<ResultFromSearch>(url).pipe();
  }

  login(obj) {
    const url = this.baseUrl + 'login/';
    return this.http.post(url, obj).pipe();
  }


  status(obj): Observable<Status> {
    const url = this.baseUrl + 'status/';
    return this.http.get<Status>(url).pipe();
  }

  //-----------------------------------
  //-----------------------------------
  //-------------NOTICIAS--------------
  //-----------------------------------
  //-----------------------------------

  // HttpClient API get() method => Fetch news list
  getNews(): Observable<News[]> {
    return this.http.get<News[]>(this.apiURL + '/news').pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // HttpClient API get() method => Fetch HIGHLIGHTED news list
  getNewsHighlighted(): Observable<News[]> {
    return this.http.get<News[]>(this.apiURL + '/newshighlighted').pipe(
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

  // HttpClient API put() method => Update Highlight
  changeHighlightNews(id, status) {
    return this.http.get(this.apiURL + '/setnewshighlight?id=' + id + '&status=' + status).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // HttpClient API put() method => Update patient
  deleteNews(id) {
    return this.http.delete(this.apiURL + '/news?id=' + id).pipe(
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

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.apiURL + '/events').pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getSingleEvent(id): Observable<Event> {
    return this.http.get<Event>(this.apiURL + '/event/' + id).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getEventsHighlighted(): Observable<Event[]> {
    return this.http.get<Event[]>(this.apiURL + '/eventshighlighted').pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  createEvent(event) {
    return this.http.post(this.apiURL + '/event', event).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  updateEvent(id, event) {
    return this.http.put(this.apiURL + '/event?id=' + id, event).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  deleteEvent(id) {
    return this.http.delete(this.apiURL + '/event?id=' + id).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  changeHighlightEvent(id, status) {
    return this.http.get(this.apiURL + '/seteventhighlight?id=' + id + '&status=' + status).pipe(
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

