import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Observable, take } from 'rxjs';
import { INVITES, Invite } from 'src/app/constants/guest-list';
import {
  EmailState,
  EmailTemplate,
  defaultEmailState,
  defaultEmailTemplate,
} from 'src/app/models/invite.model';
import { EmailClientService } from 'src/app/services/email-client/email-client.service';
import {
  DeviceType,
  WindowSizeService,
} from 'src/app/services/window-size/window-size.service';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RsvpComponent implements OnInit {
  @Input() public inviteId = '';

  public isSmallDevice$: Observable<boolean>;
  public formData: EmailTemplate = defaultEmailTemplate;
  public emailFormState: EmailState = defaultEmailState;
  public inviteDetails: Invite | undefined;
  public primaryGuest: string | undefined;
  public isPositiveRsvp = true;

  constructor(
    private windowSizeService: WindowSizeService,
    private emailClientService: EmailClientService
  ) {
    this.isSmallDevice$ = this.windowSizeService.isWidthLessThanBreakpoint(
      DeviceType.Tablet
    );
  }

  public ngOnInit(): void {
    this.inviteDetails = INVITES.find((i) => i.id === this.inviteId);
    this.primaryGuest = this.inviteDetails?.guests[0].name;
  }

  private getGuestIndex(guestId: string): number {
    return (
      this.inviteDetails?.guests.findIndex((guest) => guest.id === guestId) ??
      -1
    );
  }

  private checkPositiveRsvp(): void {
    const guestsAttending =
      this.inviteDetails?.guests.filter((guest) => guest.isComing).length ?? 0;

    this.isPositiveRsvp = guestsAttending > 0;
  }

  public handleGuestChange(guestId: string, isRemoving: boolean = false): void {
    if (this.inviteDetails) {
      const guestIndex = this.getGuestIndex(guestId);

      if (guestIndex > -1) {
        this.inviteDetails.guests[guestIndex].isComing = !isRemoving;
      }
    }

    this.checkPositiveRsvp();
  }

  // TODO - https://gibbs-wedmin.atlassian.net/browse/WED-26: Implement redux
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
        result: 'YES',
        name: 'Dale Williams',
        details: 'Amy Williams, Nina Williams',
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
