import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent {
  @Input() public width = '500px';
  @Input() public height = '500px';
  @Input() public zoom = 8;
  @Input() public markerLatitude = -29.78308;
  @Input() public markerLongitude = 31.05314;
  @Input() public markerTitle = 'Beach Spot';

  public get markerPosition(): google.maps.LatLngLiteral {
    return {
      lat: this.markerLatitude,
      lng: this.markerLongitude,
    };
  }
}
