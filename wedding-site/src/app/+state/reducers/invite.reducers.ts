import { createReducer, on } from '@ngrx/store';
import {
  EmailButtonIcon,
  EmailButtonText,
  EmailState,
  defaultEmailState,
  negativeRsvpState,
  positiveRsvpState,
} from 'src/app/models/invite.model';
import {
  sendEmail,
  sendEmailFailure,
  sendEmailSuccess,
  setNegativeRsvpState,
  setPositiveRsvpState,
} from '../actions/invite.actions';
import { ButtonType } from 'src/app/components/button/button.component';

export const inviteReducer = createReducer(
  defaultEmailState,
  on(setPositiveRsvpState, (state: EmailState) => ({
    ...state,
    buttonState: positiveRsvpState,
  })),
  on(setNegativeRsvpState, (state: EmailState) => ({
    ...state,
    buttonState: negativeRsvpState,
  })),
  on(sendEmail, (state: EmailState) => ({
    ...state,
    isButtonClicked: true,
    isLoading: true,
    buttonState: {
      ...state.buttonState,
      buttonIcon: 'send' as EmailButtonIcon,
      buttonText: 'Sending...' as EmailButtonText,
    },
  })),
  on(sendEmailSuccess, (state: EmailState) => ({
    ...state,
    isLoading: false,
    isSendSuccess: true,
    buttonState: {
      ...state.buttonState,
      buttonType: 'success' as ButtonType,
      buttonIcon: 'hand-thumbs-up' as EmailButtonIcon,
      buttonText: 'Sent' as EmailButtonText,
    },
  })),
  on(sendEmailFailure, (state: EmailState) => ({
    ...state,
    isLoading: false,
    isSendFailure: true,
    buttonState: {
      ...state.buttonState,
      buttonType: 'failure' as ButtonType,
      buttonIcon: 'hand-thumbs-down' as EmailButtonIcon,
      buttonText: 'Failed' as EmailButtonText,
    },
  }))
);
