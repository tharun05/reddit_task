import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubredditlistComponent } from './subredditlist.component';
import {RouterTestingModule} from '@angular/router/testing';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';
import {RedditService} from '../../shared/services/reddit.service';
import {HttpService} from '../../shared/services/http.service';
import { HttpClientModule } from '@angular/common/http';

describe('SubredditlistComponent', () => {
  let component: SubredditlistComponent;
  let fixture: ComponentFixture<SubredditlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot(),
        FormsModule,
        HttpClientModule
      ],
      declarations: [ SubredditlistComponent ],
      providers: [RedditService, TranslateService, HttpService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubredditlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
