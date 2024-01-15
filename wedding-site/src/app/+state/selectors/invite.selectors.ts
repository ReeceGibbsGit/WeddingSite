import { createSelector } from '@ngrx/store';
import { EmailState } from 'src/app/models/invite.model';

export interface AppState {
  invite: EmailState;
}

export const selectInviteState = (state: AppState) => state.invite;

export const selectEmailState = createSelector(
  selectInviteState,
  (inviteState: EmailState) => inviteState
);
