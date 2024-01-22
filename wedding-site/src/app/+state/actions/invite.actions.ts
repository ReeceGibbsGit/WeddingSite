import { createAction, props } from '@ngrx/store';
import { EmailTemplate } from 'src/app/models/invite.model';

export const setPositiveRsvpState = createAction(
  '[RSVP Component] Positive RSVP'
);

export const setNegativeRsvpState = createAction(
  '[RSVP Component] Negative RSVP'
);

export const sendEmail = createAction(
  '[RSVP Component] Send Email',
  props<{ emailTemplate: EmailTemplate }>()
);

export const sendEmailSuccess = createAction(
  '[RSVP Component] Send Email Success'
);

export const sendEmailFailure = createAction(
  '[RSVP Component] Send Email Failure'
);
