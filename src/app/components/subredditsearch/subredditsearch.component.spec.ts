import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubredditsearchComponent } from './subredditsearch.component';
import {RouterTestingModule} from '@angular/router/testing';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';
import {RedditService} from '../../shared/services/reddit.service';
import { HttpClientModule } from '@angular/common/http';

describe('SubredditsearchComponent', () => {
  let component: SubredditsearchComponent;
  let fixture: ComponentFixture<SubredditsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot(),
        FormsModule,
        HttpClientModule
      ],
      declarations: [ SubredditsearchComponent ],
      providers: [RedditService, TranslateService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubredditsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
