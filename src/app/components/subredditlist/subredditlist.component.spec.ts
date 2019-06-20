import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubredditlistComponent } from './subredditlist.component';

describe('SubredditlistComponent', () => {
  let component: SubredditlistComponent;
  let fixture: ComponentFixture<SubredditlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubredditlistComponent ]
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
