import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBannerComponent } from './hero-banner.component';
import { assignProps } from 'src/helpers/test-helpers';

interface TestSetup {
  fixture: ComponentFixture<HeroBannerComponent>;
  component: HeroBannerComponent;
}

function setup({
  props,
  providers,
}: {
  props?: Partial<HeroBannerComponent>;
  providers?: { provide: any; useValue: any }[];
} = {}): TestSetup {
  TestBed.configureTestingModule({
    declarations: [HeroBannerComponent],
    providers: [...(providers || [])],
  });

  const fixture = TestBed.createComponent(HeroBannerComponent);
  const component = fixture.componentInstance;
  assignProps<HeroBannerComponent>(component, props);

  return { fixture, component };
}

describe('HeroBannerComponent', () => {
  it('should create', () => {
    let { component } = setup();
    expect(component).toBeTruthy();
  });
});
