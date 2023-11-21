import { Component, OnDestroy, OnInit } from '@angular/core';
import { WindowSizeService } from './services/window-size.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'wedding-site';
  private windowResizeSubscription: Subscription = new Subscription();

  constructor(private windowSizeService: WindowSizeService) {}

  ngOnInit(): void {
    this.windowResizeSubscription = this.windowSizeService
      .getWindowSize()
      .subscribe((windowWidth) => {
        // use this in the future
      });
  }

  ngOnDestroy(): void {
    if (this.windowResizeSubscription) {
      this.windowResizeSubscription.unsubscribe();
    }
  }
}
