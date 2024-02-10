import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent {
  @Input() public width = '500px';
  @Input() public height = '500px';
  @Input() public zoom = 8;
  @Input() public markerTitle = 'Beb Spot';
  @Input() public markerLatitude = -29.78308;
  @Input() public markerLongitude = 31.05314;

  public get markerPosition(): { lat: number; lng: number } {
    return {
      lat: this.markerLatitude,
      lng: this.markerLongitude,
    };
  }

  public get markerLink(): string {
    return `https://www.google.com/maps/?q=${this.markerLatitude},${this.markerLongitude}`;
  }
}
