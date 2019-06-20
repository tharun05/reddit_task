import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Props } from '../../constants/props';

@Injectable()
export class RedditService {
  props: Props = Props;
  // private reddit_url: string = '/r/';

  constructor(private http: HttpService) {
  }

  getRedditDataList(subredditURL: any) {
    return this.http.get('/r/' + subredditURL + '.json');
  }

}
