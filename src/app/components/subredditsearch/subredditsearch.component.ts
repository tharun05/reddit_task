import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {StorageService} from './../../shared/services/storage.service';

@Component({
  selector: 'app-subredditsearch',
  templateUrl: './subredditsearch.component.html',
  styleUrls: ['./subredditsearch.component.scss']
})
export class SubredditsearchComponent implements OnInit {
  subRedditValue:any = '';
  langCode: any = "en";
  @Output() outputEvent = new EventEmitter();
  constructor(private translate: TranslateService, private storageService: StorageService) {

  }

  ngOnInit() {
    this.translate.setDefaultLang(this.langCode);
    this.translate.onLangChange.subscribe(val => {
      this.storageService.saveToWebStorage('lang', val.lang);
    });
  }
  searchSubReddit(inputValue: any){
    this.outputEvent.emit(inputValue);
  }
}
