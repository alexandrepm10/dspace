import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor(private http: HttpClient) {
  }

  // httpOptions = {
  //   headers: new HttpHeaders({
  //       'Content-Type': 'application/json'
  //     }
  //   )
  // };

  getCommunities() {
    // let header = new HttpHeaders();
    // header = header.append('content-type', 'application/json');
    return this.http.get('http://localhost:8080/rest'/*, {headers: header}*/);
  }
}
