import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RedditService} from './shared/services/reddit.service';
import {HttpService} from './shared/services/http.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SubredditsearchComponent } from './components/subredditsearch/subredditsearch.component';
import { SubredditlistComponent } from './components/subredditlist/subredditlist.component';
import { FormsModule } from '@angular/forms';
import { StorageServiceModule} from 'angular-webstorage-service';


export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    SubredditsearchComponent,
    SubredditlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StorageServiceModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [RedditService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
