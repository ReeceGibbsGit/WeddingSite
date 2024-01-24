import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { ButtonComponent } from './components/button/button.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RsvpComponent } from './components/rsvp/rsvp.component';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { inviteReducer } from './+state/reducers/invite.reducers';
import { InviteEffects } from './+state/effects/invite.effects';
import { Angular2ImageGalleryModule } from 'angular2-image-gallery';

const routes: Routes = [{ path: '', component: AppComponent }];

@NgModule({
  declarations: [
    AppComponent,
    HeroBannerComponent,
    ButtonComponent,
    RsvpComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(routes),
    EffectsModule.forRoot([InviteEffects]),
    StoreModule.forRoot({ invite: inviteReducer }),
    Angular2ImageGalleryModule,
    HammerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
