import { TestBed } from '@angular/core/testing';

import { DeviceType, WindowSizeService } from './window-size.service';
import { WINDOW } from '@ng-web-apis/common';

function setup(
  providers?: { provide: any; useValue: any }[]
): WindowSizeService {
  let service: WindowSizeService;

  TestBed.configureTestingModule({
    providers: [WindowSizeService, ...(providers || [])],
  });

  service = TestBed.inject(WindowSizeService);
  return service;
}

describe('WindowSizeService', () => {
  it('should be created', () => {
    const service = setup();
    expect(service).toBeTruthy();
  });

  describe('when the breakpoints are hit', () => {
    it.each([
      [DeviceType.Narrow, 124],
      [DeviceType.Mobile, 400],
      [DeviceType.MobileLandscape, 700],
      [DeviceType.Tablet, 800],
      [DeviceType.TabletLandscape, 1200],
      [DeviceType.Desktop, 1500],
    ])(
      'returns device type %i when window size is %i',
      (expectedDeviceType, windowSize) => {
        const service = setup([
          {
            provide: WINDOW,
            useValue: { innerWidth: windowSize },
          },
        ]);

        const deviceType = service.getDeviceType();
        expect(deviceType).toBe(expectedDeviceType);
      }
    );
  });
});
