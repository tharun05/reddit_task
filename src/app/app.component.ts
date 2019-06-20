import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'redittask';
  subRedditValue:any = null;
  langCode: any;
  constructor(
    private translate: TranslateService
  ) {

  }

  subReditValue(event) {
    this.subRedditValue = event;
  }

  ngOnInit() {
    this.translate.addLangs(['en', 'fr']);
    const browserLang = this.translate.getBrowserLang();
    this.langCode = sessionStorage.getItem('lang');
    this.translate.use(this.langCode);
  }
}
