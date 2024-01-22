import { ButtonType } from 'src/app/components/button/button.component';

export type RsvpResult = 'YES' | 'NO';

export interface EmailTemplate {
  result: RsvpResult;
  name: string | undefined;
  details: string | undefined;
}

export type EmailButtonIcon =
  | 'hand-thumbs-up'
  | 'hand-thumbs-down'
  | 'envelope-heart'
  | 'send';

export type EmailButtonText =
  | 'RSVP Yes'
  | 'RSVP No'
  | 'Sending...'
  | 'Sent'
  | 'Failed';

export interface EmailButtonState {
  buttonType: ButtonType;
  buttonIcon: EmailButtonIcon;
  buttonText: EmailButtonText;
}

export interface EmailState {
  isButtonClicked: boolean;
  isLoading: boolean;
  isSendFailure: boolean;
  isSendSuccess: boolean;
  buttonState: EmailButtonState;
}

export const defaultEmailTemplate: EmailTemplate = {
  result: 'YES',
  name: '',
  details: '',
};

export const positiveRsvpState: EmailButtonState = {
  buttonType: 'success',
  buttonIcon: 'envelope-heart',
  buttonText: 'RSVP Yes',
};

export const negativeRsvpState: EmailButtonState = {
  buttonType: 'failure',
  buttonIcon: 'envelope-heart',
  buttonText: 'RSVP No',
};

export const defaultEmailState: EmailState = {
  isButtonClicked: false,
  isLoading: false,
  isSendSuccess: false,
  isSendFailure: false,
  buttonState: positiveRsvpState,
};
