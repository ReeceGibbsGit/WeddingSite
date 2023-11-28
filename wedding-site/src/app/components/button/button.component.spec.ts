import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';
import { assignProps } from 'src/helpers/test-helpers';

interface TestSetup {
  fixture: ComponentFixture<ButtonComponent>;
  component: ButtonComponent;
}

function setup({
  props,
  providers,
}: {
  props?: Partial<ButtonComponent>;
  providers?: { provide: any; useValue: any }[];
} = {}): TestSetup {
  TestBed.configureTestingModule({
    declarations: [ButtonComponent],
    providers: [...(providers || [])],
  });

  const fixture = TestBed.createComponent(ButtonComponent);
  const component = fixture.componentInstance;
  assignProps<ButtonComponent>(component, props);

  return { fixture, component };
}

describe('ButtonComponent', () => {
  it('should create', () => {
    const { component } = setup();
    expect(component).toBeTruthy();
  });

  describe('the type property', () => {
    it('should apply the btn-outline-dark class if set to primary', () => {
      const { fixture } = setup({
        props: {
          type: 'primary',
        },
      });
      fixture.detectChanges();

      const buttonElement: HTMLElement =
        fixture.nativeElement.querySelector('button');

      expect(buttonElement.classList).toContain('btn-outline-dark');
      expect(buttonElement.classList).not.toContain('btn-dark');
    });

    it('should apply the btn-dark class if set to secondary', () => {
      const { fixture } = setup({
        props: {
          type: 'secondary',
        },
      });
      fixture.detectChanges();

      const buttonElement: HTMLElement =
        fixture.nativeElement.querySelector('button');

      expect(buttonElement.classList).toContain('btn-dark');
      expect(buttonElement.classList).not.toContain('btn-outline-dark');
    });
  });

  describe('the icon property', () => {
    it('should not render the icon element if the property is not set', () => {
      const { fixture } = setup(); // icon is undefined by default
      fixture.detectChanges();

      const iconElement: HTMLElement = fixture.nativeElement.querySelector('i');

      expect(iconElement).toBeNull();
    });

    it('should render the icon element with the icon class passed through the input property', () => {
      const iconName = 'heart-outlined';
      const { fixture } = setup({
        props: {
          icon: iconName,
        },
      });
      fixture.detectChanges();

      const iconElement: HTMLElement = fixture.nativeElement.querySelector('i');

      expect(iconElement.classList).toContain(`bi-${iconName}`);
    });
  });
});
