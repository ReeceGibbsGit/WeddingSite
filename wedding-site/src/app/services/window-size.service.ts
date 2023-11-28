import { Inject, Injectable } from '@angular/core';
import { WINDOW } from '@ng-web-apis/common';
import { Observable, debounceTime, fromEvent, map, startWith } from 'rxjs';

export enum DeviceType {
  Desktop = 'desktop',
  TabletLandscape = 'tablet-landscape',
  Tablet = 'tablet',
  MobileLandscape = 'mobile-landscape',
  Mobile = 'mobile',
  Narrow = 'narrow',
}

export const WINDOW_BREAKPOINTS = [
  { minWidth: 1400, type: DeviceType.Desktop }, // 87.5rem
  { minWidth: 1024, type: DeviceType.TabletLandscape }, // 64rem
  { minWidth: 768, type: DeviceType.Tablet }, // 48rem
  { minWidth: 656, type: DeviceType.MobileLandscape }, // 41rem
  { minWidth: 368, type: DeviceType.Mobile }, // 23rem
];

const DEBOUNCE = 100;

@Injectable({
  providedIn: 'root',
})
export class WindowSizeService {
  constructor(@Inject(WINDOW) private window: Window) {}

  public getWindowSize(): Observable<number> {
    return fromEvent(this.window, 'resize').pipe(
      debounceTime(DEBOUNCE),
      map(() => this.window.innerWidth),
      startWith(this.window.innerWidth)
    );
  }
}
