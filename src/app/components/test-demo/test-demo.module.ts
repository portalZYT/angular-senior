import {CUSTOM_ELEMENTS_SCHEMA,NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TestDemoComponent} from "./test-demo.component";

@NgModule({
  declarations: [TestDemoComponent],
  imports: [
    CommonModule
  ],
  exports: [TestDemoComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestDemoModule {
}
