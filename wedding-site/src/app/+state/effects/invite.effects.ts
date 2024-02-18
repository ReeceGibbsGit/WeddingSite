import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EmailClientService } from './../../services/email-client/email-client.service';
import * as InviteActions from '../actions/invite.actions';
import { map, switchMap } from 'rxjs';

@Injectable()
export class InviteEffects {
  public sendEmail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(InviteActions.sendEmail),
      switchMap((action) =>
        this.emailClientService
          .send({
            result: action.emailTemplate.result,
            name: action.emailTemplate.name,
            details: action.emailTemplate.details,
          })
          .pipe(
            map((success) =>
              success
                ? InviteActions.sendEmailSuccess()
                : InviteActions.sendEmailFailure()
            )
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private emailClientService: EmailClientService
  ) {}
}
