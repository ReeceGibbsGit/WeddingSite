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

export type EmailButtonText = 'RSVP' | 'Sending...' | 'Sent' | 'Failed';

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

export const defaultEmailState: EmailState = {
  isButtonClicked: false,
  isLoading: false,
  isSendSuccess: false,
  isSendFailure: false,
  buttonState: {
    buttonType: 'primary',
    buttonIcon: 'envelope-heart',
    buttonText: 'RSVP',
  },
};
