import {inject, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import { environment } from '../../../environments/environment';
import { HttpService } from './http.service';
import {Props} from '../../constants/props';

Props.API_END_POINT = environment.API_END_POINT;
describe('HttpClientService', () => {
  let httpTestingController: HttpTestingController;
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ HttpService ],
    });
    httpTestingController = TestBed.get(HttpTestingController);
  });


  it('should test ack end api', inject([HttpTestingController, HttpService],
    (httpMock: HttpTestingController, httpService: HttpService) => {
      const dummyRedditList = [
        { login: 'John' },
        { login: 'Doe' }
      ];
      httpService.get('/r/posts.json').subscribe( (redditList: any) => {
        expect(redditList.length).toBeDefined();
        expect(redditList).toEqual(dummyRedditList);
        });
      const result = httpMock.expectOne(Props.API_END_POINT + '/r/posts.json');
      expect(result.request.method).toBe('GET');
      result.flush(dummyRedditList);
      httpTestingController.verify();
    }));
});
