import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { ButtonComponent } from './components/button/button.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [AppComponent, HeroBannerComponent, ButtonComponent, ModalComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
