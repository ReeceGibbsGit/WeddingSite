import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { WindowSizeService } from './window-size.service';
import { WINDOW } from '@ng-web-apis/common';
import * as rxjs from 'rxjs';

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

  it('should return the device width when getWindowwSize is called', fakeAsync(() => {
    const mockWidth = 450;
    const service = setup([
      {
        provide: WINDOW,
        useValue: { innerWidth: mockWidth },
      },
    ]);

    jest.spyOn(rxjs, 'fromEvent').mockReturnValue(rxjs.of(mockWidth));

    service.getWindowSize().subscribe((width) => {
      tick();
      expect(width).toBe(mockWidth);
    });
  }));
});
