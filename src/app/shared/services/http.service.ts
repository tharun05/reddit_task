import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Props } from '../../constants/props';


@Injectable()
export class HttpService {
  private host = Props.API_END_POINT;

  constructor(private http: HttpClient) {
  }

  get(url: string) {
    url = this.host + url;
    return this.http.get(url);
  }
}
