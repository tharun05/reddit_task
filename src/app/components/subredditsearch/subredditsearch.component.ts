import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-subredditsearch',
  templateUrl: './subredditsearch.component.html',
  styleUrls: ['./subredditsearch.component.scss']
})
export class SubredditsearchComponent implements OnInit {
  subRedditValue:any = '';
  langCode: any = "en";
  @Output() outputEvent = new EventEmitter();
  constructor(private translate: TranslateService) {

  }

  ngOnInit() {
    this.translate.setDefaultLang(this.langCode);
    this.translate.onLangChange.subscribe(val => {
      sessionStorage.setItem('lang', val.lang);
    });
  }
  searchSubReddit(inputValue: any){
    this.outputEvent.emit(inputValue);
  }
}
