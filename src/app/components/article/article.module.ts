import {CUSTOM_ELEMENTS_SCHEMA, Injectable, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArticleComponent} from "./article.component";
import {TestDemoModule} from "../test-demo/test-demo.module";

@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    TestDemoModule
  ],
  exports: [ArticleComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
@Injectable()
export class ArticleModule {
}
