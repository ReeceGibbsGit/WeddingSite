import { Component } from '@angular/core';
import {
  DeviceType,
  WindowSizeService,
} from './services/window-size/window-size.service';
import { Observable } from 'rxjs';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'wedding-site';
  public isSmallDevice$: Observable<boolean>;

  constructor(private windowSizeService: WindowSizeService) {
    this.isSmallDevice$ = this.windowSizeService.isWidthLessThanBreakpoint(
      DeviceType.Tablet
    );
  }

  public celebrate() {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }
}
