import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { createCustomElement } from '@angular/elements';
import { ClarityModule } from '@clr/angular';
import { MadeWithLoveComponent } from './made-with-love/made-with-love.component';

@NgModule({
  imports: [
    BrowserModule,
    ClarityModule
  ],
  declarations: [
    MadeWithLoveComponent
  ],
  entryComponents: [
    MadeWithLoveComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {
    const customElement = createCustomElement(MadeWithLoveComponent, { injector });
    customElements.define('made-with-loves', customElement);
  }

  ngDoBootstrap() { }
}