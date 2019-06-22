import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {SubredditlistComponent} from './components/subredditlist/subredditlist.component';
import {SubredditsearchComponent} from './components/subredditsearch/subredditsearch.component';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import {RedditService} from './shared/services/reddit.service';
import { HttpClientModule } from '@angular/common/http';
import {HttpService} from './shared/services/http.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot(),
        FormsModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent,
        SubredditlistComponent,
        SubredditsearchComponent,
      ],
      providers: [TranslateService, RedditService, HttpService]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'redittask'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('redittask');
  });
});
