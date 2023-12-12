import { Component } from '@angular/core';
import {
  DeviceType,
  WindowSizeService,
} from './services/window-size/window-size.service';
import { Observable, take } from 'rxjs';
import confetti from 'canvas-confetti';
import { EmailClientService } from './services/email-client/email-client.service';
import {
  EmailFormState,
  EmailTemplate,
  defaultEmailFormState,
  defaultEmailTemplate,
} from './features/email-form/email-form.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'wedding-site';
  public isSmallDevice$: Observable<boolean>;

  public formData: EmailTemplate = defaultEmailTemplate;

  public emailFormState: EmailFormState = defaultEmailFormState;

  constructor(
    private windowSizeService: WindowSizeService,
    private emailClientService: EmailClientService
  ) {
    this.isSmallDevice$ = this.windowSizeService.isWidthLessThanBreakpoint(
      DeviceType.Tablet
    );
  }

  public celebrate() {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }

  // TODO: Handle this state more effectively
  public handleSendEmail() {
    this.emailFormState = {
      ...this.emailFormState,
      isButtonClicked: true,
      isLoading: true,
      buttonState: {
        ...this.emailFormState.buttonState,
        buttonIcon: 'send',
        buttonText: 'Sending...',
      },
    };

    this.emailClientService
      .send({
        first_name: this.formData.firstName.trim(),
        last_name: this.formData.lastName.trim(),
        email: this.formData.email.trim(),
      })
      .pipe(take(1))
      .subscribe((success) => {
        if (success) {
          this.emailFormState = {
            ...this.emailFormState,
            isLoading: false,
            isSendSuccess: true,
            buttonState: {
              ...this.emailFormState.buttonState,
              buttonType: 'success',
              buttonIcon: 'hand-thumbs-up',
              buttonText: 'Sent',
            },
          };

          console.log('Email send succeeded');
        } else {
          this.emailFormState = {
            ...this.emailFormState,
            isLoading: false,
            isSendFailure: true,
            buttonState: {
              ...this.emailFormState.buttonState,
              buttonType: 'failure',
              buttonIcon: 'hand-thumbs-down',
              buttonText: 'Failed',
            },
          };

          console.error('Email send failed');
        }
      });
  }
}
