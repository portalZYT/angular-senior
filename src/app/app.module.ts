import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ArticleModule} from "./components/article/article.module";
import {TestDemoModule} from "./components/test-demo/test-demo.module";
import { TestDemo2Component } from './components/test-demo2/test-demo2.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers/reducers';

@NgModule({
  declarations: [
    AppComponent,
    TestDemo2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ArticleModule,
    TestDemoModule,
    StoreModule.forRoot(reducers, {metaReducers})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
