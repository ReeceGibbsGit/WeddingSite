import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alignment, HeroBannerComponent } from './hero-banner.component';
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
    const { component } = setup();
    expect(component).toBeTruthy();
  });

  it('should have the is floating content attribute set when the prop is defined', () => {
    const { fixture } = setup({
      props: { isFloatingContent: true },
    });
    fixture.detectChanges();

    const heroBannerElement: HTMLElement = fixture.nativeElement;

    const isFloatingContentAttribute = heroBannerElement.getAttribute(
      'is-floating-content'
    );

    expect(isFloatingContentAttribute).toBe('true');
  });

  it('should set the image url when it is defined', () => {
    const { fixture } = setup({
      props: { imageUrl: 'https://tincan.unroutable.local' },
    });
    fixture.detectChanges();

    const imageElement: HTMLElement = fixture.nativeElement.querySelector(
      '[data-test-id="hero-banner-image"]'
    );

    expect(imageElement.getAttribute('src')).toBe(
      'https://tincan.unroutable.local'
    );
  });

  describe('when the titlePosition property is defined', () => {
    it.each([['left'], ['center'], ['right']])(
      'sets the %i class in banner-content element',
      (alignment) => {
        const { fixture } = setup({
          props: { contentAlignment: alignment as Alignment },
        });
        fixture.detectChanges();

        const bannerContentElement: HTMLElement =
          fixture.nativeElement.querySelector(
            '[data-test-id="hero-banner-content"]'
          );

        expect(bannerContentElement.className).toBe(
          `banner-content ${alignment}`
        );
      }
    );
  });
});
