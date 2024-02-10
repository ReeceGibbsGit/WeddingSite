import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapComponent } from './map.component';
import { assignProps } from 'src/helpers/test-helpers';

interface TestSetup {
  fixture: ComponentFixture<MapComponent>;
  component: MapComponent;
}

function setup({
  props,
  providers,
}: {
  props?: Partial<MapComponent>;
  providers?: { provide: any; useValue: any }[];
} = {}): TestSetup {
  TestBed.configureTestingModule({
    declarations: [MapComponent],
    providers: [...(providers || [])],
  });

  const fixture = TestBed.createComponent(MapComponent);
  const component = fixture.componentInstance;
  assignProps<MapComponent>(component, props);

  return { fixture, component };
}

describe('MapComponent', () => {
  it('should create', () => {
    const { component } = setup();
    expect(component).toBeTruthy();
  });

  describe('the width property', () => {
    it('should load the default value when no value is passed in', () => {
      const { component } = setup();
      expect(component.width).toBe('500px');
    });

    it('should set the correct value when a value is passed in', () => {
      const { component } = setup({
        props: {
          width: '250px',
        },
      });
      expect(component.width).toBe('250px');
    });
  });

  describe('the height property', () => {
    it('should load the default value when no value is passed in', () => {
      const { component } = setup();
      expect(component.height).toBe('500px');
    });

    it('should set the correct value when a value is passed in', () => {
      const { component } = setup({
        props: {
          height: '250px',
        },
      });
      expect(component.height).toBe('250px');
    });
  });

  describe('the zoom property', () => {
    it('should load the default value when no value is passed in', () => {
      const { component } = setup();
      expect(component.zoom).toBe(8);
    });

    it('should set the correct value when a value is passed in', () => {
      const { component } = setup({
        props: {
          zoom: 10,
        },
      });
      expect(component.zoom).toBe(10);
    });
  });

  describe('the markerTitle property', () => {
    it('should load the default value when no value is passed in', () => {
      const { component } = setup();
      expect(component.markerTitle).toBe('Beb Spot');
    });

    it('should set the correct value when a value is passed in', () => {
      const { component } = setup({
        props: {
          markerTitle: 'Haycroft Farm',
        },
      });
      expect(component.markerTitle).toBe('Haycroft Farm');
    });
  });

  describe('the markerPosition property', () => {
    it('should load the default value when no value is passed in', () => {
      const { component } = setup();
      expect(component.markerPosition).toStrictEqual({
        lat: -29.78308,
        lng: 31.05314,
      });
    });

    it('should set the correct value when a value is passed in', () => {
      const { component } = setup({
        props: {
          markerLatitude: 3.2,
          markerLongitude: 4.3,
        },
      });
      expect(component.markerPosition).toStrictEqual({
        lat: 3.2,
        lng: 4.3,
      });
    });
  });

  describe('the markerLink property', () => {
    it('should load the default value when no value is passed in', () => {
      const { component } = setup();
      expect(component.markerLink).toBe(
        'https://www.google.com/maps/?q=-29.78308,31.05314'
      );
    });

    it('should set the correct value when a value is passed in', () => {
      const { component } = setup({
        props: {
          markerLatitude: 3.2,
          markerLongitude: 4.3,
        },
      });
      expect(component.markerLink).toBe(
        'https://www.google.com/maps/?q=3.2,4.3'
      );
    });
  });
});
