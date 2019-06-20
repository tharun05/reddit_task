import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubredditsearchComponent } from './subredditsearch.component';

describe('SubredditsearchComponent', () => {
  let component: SubredditsearchComponent;
  let fixture: ComponentFixture<SubredditsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubredditsearchComponent ]
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
