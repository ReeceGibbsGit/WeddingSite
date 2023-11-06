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

  it('should set the title when it is defined', () => {
    const { fixture } = setup({ props: { title: 'Test Title' } });
    fixture.detectChanges();

    const imageTitleElement: HTMLElement =
      fixture.nativeElement.querySelector('.image-title');

    expect(imageTitleElement.textContent?.trim()).toBe('Test Title');
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
      'sets the %i class in image-title element',
      (position) => {
        const { fixture } = setup({
          props: { titlePosition: position as Alignment },
        });
        fixture.detectChanges();

        const imageTitleElement: HTMLElement =
          fixture.nativeElement.querySelector(
            '[data-test-id="hero-banner-title"]'
          );

        expect(imageTitleElement.className).toBe(`image-title ${position}`);
      }
    );
  });
});
