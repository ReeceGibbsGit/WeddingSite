import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { sendEmail } from 'src/app/+state/actions/invite.actions';
import { INVITES, Invite } from 'src/app/constants/guest-list';
import * as InviteSelectors from 'src/app/+state/selectors/invite.selectors';
import {
  EmailState,
  EmailTemplate,
  defaultEmailTemplate,
} from 'src/app/models/invite.model';
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

  public emailState$: Observable<EmailState>;
  public isSmallDevice$: Observable<boolean>;
  public formData: EmailTemplate = defaultEmailTemplate;
  public inviteDetails: Invite | undefined;
  public primaryGuest: string | undefined;
  public isPositiveRsvp = true;

  constructor(
    private store: Store<InviteSelectors.AppState>,
    private windowSizeService: WindowSizeService
  ) {
    this.emailState$ = this.store.select(InviteSelectors.selectEmailState);
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

  public handleSendEmail() {
    const emailData: EmailTemplate = {
      result: 'YES',
      name: 'Dale Williams',
      details: 'Amy Williams, Nina Williams',
    };

    this.store.dispatch(sendEmail({ emailTemplate: emailData }));
  }
}
