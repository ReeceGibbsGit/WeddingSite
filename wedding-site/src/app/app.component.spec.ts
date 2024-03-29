import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { assignProps } from 'src/helpers/test-helpers';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
interface TestSetup {
  fixture: ComponentFixture<AppComponent>;
  component: AppComponent;
}

function setup({
  props,
  providers,
}: {
  props?: Partial<AppComponent>;
  providers?: { provide: any; useValue: any }[];
} = {}): TestSetup {
  TestBed.configureTestingModule({
    declarations: [AppComponent, HeroBannerComponent],
    imports: [],
    providers: [
      ...(providers || []),
      {
        provide: ActivatedRoute,
        useValue: {
          queryParams: of({ invite: '1234' }),
        },
      },
    ],
  });

  const fixture = TestBed.createComponent(AppComponent);
  const component = fixture.componentInstance;
  assignProps<AppComponent>(component, props);

  return { fixture, component };
}

describe('AppComponent', () => {
  it('should create the app', () => {
    const { fixture } = setup();
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'wedding-site'`, () => {
    const { fixture } = setup();
    const app = fixture.componentInstance;
    expect(app.title).toEqual('wedding-site');
  });
});
