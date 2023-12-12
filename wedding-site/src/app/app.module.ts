import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { ButtonComponent } from './components/button/button.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HeroBannerComponent, ButtonComponent],
  imports: [BrowserModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
