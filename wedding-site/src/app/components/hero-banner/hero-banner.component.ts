import { Component, Input } from '@angular/core';

export type Alignment = 'left' | 'center' | 'right';

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.scss'],
})
export class HeroBannerComponent {
  @Input() title: string | undefined;
  @Input() titlePosition: Alignment = 'center';
  @Input() imageUrl: string =
    'https://via.placeholder.com/1920x1080/eee?text=16:9';
}
