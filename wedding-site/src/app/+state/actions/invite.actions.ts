import { createAction, props } from '@ngrx/store';
import { EmailTemplate } from 'src/app/models/invite.model';

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
