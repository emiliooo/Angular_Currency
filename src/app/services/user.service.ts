import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getCurrency(currenc): Observable<any> {
    return this.httpClient.get('https://bitbay.net/API/Public/' + currenc + '/orderbook.json');
  }

}
