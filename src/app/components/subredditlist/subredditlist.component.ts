import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import {RedditService} from './../../shared/services/reddit.service';

@Component({
  selector: 'app-subredditlist',
  templateUrl: './subredditlist.component.html',
  styleUrls: ['./subredditlist.component.scss']
})
export class SubredditlistComponent implements OnInit, OnChanges {
  redditList: any;
  @Input() InputValue;
  constructor(private redditService: RedditService) {
    console.log(this.InputValue);
  }

  ngOnInit() {
    this.redditService.getRedditDataList('posts').subscribe((redditData:any) => {
      this.redditList = redditData.data.children;
    });

  }

  getSubRedditList(type: any){
    this.redditService.getRedditDataList(type).subscribe((redditData:any) => {
      this.redditList = redditData.data.children;
      console.log(this.redditList)
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    const changeValue: SimpleChange = changes['InputValue'];
    if (changeValue && changeValue.previousValue != changeValue.currentValue) {
      this.InputValue = changeValue.currentValue;

      if (!!this.InputValue) {
        this.getSubRedditList(this.InputValue);
      }
    }
  }
}
