import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Props } from '../../constants/props';
import {environment} from '../../../environments/environment';

Props.API_END_POINT = environment.API_END_POINT;

@Injectable()
export class HttpService {
  private host = Props.API_END_POINT;

  constructor(private http: HttpClient) {
  }
  /**
   * Created this method to get the  reddit json file using the http
   * get method.
   * @method get
   * @param {url: string} url params required.
   */

  get(url: string): Observable<any> {
    url = this.host + url;
    return this.http.get(url);
  }
}
