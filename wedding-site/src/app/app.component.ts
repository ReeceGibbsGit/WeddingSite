import { Component, OnInit } from '@angular/core';
import {
  DeviceType,
  WindowSizeService,
} from './services/window-size/window-size.service';
import { Observable, take } from 'rxjs';
import confetti from 'canvas-confetti';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title = 'wedding-site';
  public isSmallDevice$: Observable<boolean>;
  public inviteId: string | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private windowSizeService: WindowSizeService
  ) {
    this.isSmallDevice$ = this.windowSizeService.isWidthLessThanBreakpoint(
      DeviceType.Tablet
    );
  }

  public ngOnInit(): void {
    this.activatedRoute.queryParams.pipe(take(2)).subscribe((params) => {
      this.inviteId = params['invite'];
    });
  }

  public celebrate() {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }
}
