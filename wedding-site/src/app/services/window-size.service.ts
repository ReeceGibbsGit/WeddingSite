import { Inject, Injectable } from '@angular/core';
import { WINDOW } from '@ng-web-apis/common';

export enum DeviceType {
  Desktop = 'desktop',
  TabletLandscape = 'tablet-landscape',
  Tablet = 'tablet',
  MobileLandscape = 'mobile-landscape',
  Mobile = 'mobile',
  Narrow = 'narrow',
}

export const WINDOW_BREAKPOINTS = [
  { minWidth: 1400, type: DeviceType.Desktop },
  { minWidth: 1024, type: DeviceType.TabletLandscape },
  { minWidth: 768, type: DeviceType.Tablet },
  { minWidth: 656, type: DeviceType.MobileLandscape },
  { minWidth: 386, type: DeviceType.Mobile },
];

@Injectable({
  providedIn: 'root',
})
export class WindowSizeService {
  constructor(@Inject(WINDOW) private window: Window) {}

  getDeviceType(): DeviceType {
    const windowWidth = this.window.innerWidth;

    for (const breakpoint of WINDOW_BREAKPOINTS) {
      if (windowWidth >= breakpoint.minWidth) {
        return breakpoint.type;
      }
    }

    return DeviceType.Narrow;
  }
}
