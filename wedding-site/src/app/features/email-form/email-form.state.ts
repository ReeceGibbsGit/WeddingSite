import { ButtonType } from 'src/app/components/button/button.component';

export type RsvpResult = 'YES' | 'NO';

// TODO: Handle the state of this feature more appropriately with something like redux
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

export type EmailButtonText = 'Send' | 'Sending...' | 'Sent' | 'Failed';

export interface EmailButtonState {
  buttonType: ButtonType;
  buttonIcon: EmailButtonIcon;
  buttonText: EmailButtonText;
}

export interface EmailFormState {
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

export const defaultEmailFormState: EmailFormState = {
  isButtonClicked: false,
  isLoading: false,
  isSendSuccess: false,
  isSendFailure: false,
  buttonState: {
    buttonType: 'primary',
    buttonIcon: 'envelope-heart',
    buttonText: 'Send',
  },
};
