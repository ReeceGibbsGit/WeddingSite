import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RsvpComponent } from './rsvp.component';
import { assignProps } from 'src/helpers/test-helpers';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { WindowSizeService } from 'src/app/services/window-size/window-size.service';
import { defaultEmailState } from 'src/app/models/invite.model';
import { Invite } from 'src/app/constants/guest-list';

let mockInvite: Invite = {
  id: 'b6e307aa-3cfd-464b-af9c-94310c2ac2e6',
  guests: [
    {
      name: 'David Baytopp',
      isComing: true,
      id: '6566edf6-2e6e-44cf-9c24-9f93080d3465',
    },
    {
      name: 'Lesley Baytopp',
      isComing: true,
      id: '6b5ae48a-d1e7-4210-a38c-d3ad4199b2d9',
    },
  ],
};

interface TestSetup {
  fixture: ComponentFixture<RsvpComponent>;
  component: RsvpComponent;
}

function setup({
  props,
  providers,
}: {
  props?: Partial<RsvpComponent>;
  providers?: { provide: any; useValue: any }[];
} = {}): TestSetup {
  TestBed.configureTestingModule({
    declarations: [RsvpComponent],
    providers: [
      ...(providers || []),
      {
        provide: Store,
        useValue: {
          select: () => of(defaultEmailState),
          dispatch: () => of(true),
        },
      },
      {
        provide: WindowSizeService,
        useValue: {
          isWidthLessThanBreakpoint: () => of(true),
        },
      },
    ],
  });

  const fixture = TestBed.createComponent(RsvpComponent);
  const component = fixture.componentInstance;
  assignProps<RsvpComponent>(component, props);

  fixture.detectChanges();

  return { fixture, component };
}

describe('RsvpComponent', () => {
  it('should create', () => {
    const { component } = setup();
    expect(component).toBeTruthy();
  });

  it('should load the default email state', (done) => {
    const { component } = setup();

    component.emailState$.subscribe((emailState) => {
      expect(emailState).toBe(defaultEmailState);
      done();
    });
  });

  it('should load the invite given the invite id', () => {
    const { component } = setup({
      props: {
        inviteId: mockInvite.id,
      },
    });

    expect(component.inviteDetails).toStrictEqual(mockInvite);
  });

  it('should handle guest removal effectively', () => {
    const { component } = setup({
      props: {
        inviteId: mockInvite.id,
      },
    });

    component.handleGuestChange(mockInvite.guests[0].id, true);
    expect(component.inviteDetails?.guests[0].isComing).toBeFalsy();
  });

  it('should handle guest adding effectively', () => {
    mockInvite.guests[0].isComing = false;

    const { component } = setup({
      props: {
        inviteId: mockInvite.id,
      },
    });

    component.handleGuestChange(mockInvite.guests[0].id);
    expect(component.inviteDetails?.guests[0].isComing).toBeTruthy();
  });

  it('should set isPositiveRsvp to false if no guests attending', () => {
    const { component } = setup({
      props: {
        inviteId: mockInvite.id,
      },
    });

    // sequentially removing all guests
    for (let i = 0; i < mockInvite.guests.length; i++) {
      component.handleGuestChange(mockInvite.guests[i].id, true);
    }

    expect(component.isPositiveRsvp).toBeFalsy();
  });

  it('should dispatch YES response when invitees are coming', () => {
    const { component } = setup({
      props: {
        inviteId: mockInvite.id,
      },
    });

    const dispatchSpy = jest.spyOn((component as any).store, 'dispatch');
    component.handleSendEmail();

    expect(dispatchSpy).toHaveBeenCalledWith({
      type: '[RSVP Component] Send Email',
      emailTemplate: {
        result: 'YES',
        name: mockInvite.guests[0].name,
        details: expect.any(String),
      },
    });
  });

  it('should dispatch NO response when invitees are coming', () => {
    const { component } = setup({
      props: {
        inviteId: mockInvite.id,
      },
    });

    // sequentially removing all guests
    for (let i = 0; i < mockInvite.guests.length; i++) {
      component.handleGuestChange(mockInvite.guests[i].id, true);
    }

    const dispatchSpy = jest.spyOn((component as any).store, 'dispatch');
    component.handleSendEmail();

    expect(dispatchSpy).toHaveBeenCalledWith({
      type: '[RSVP Component] Send Email',
      emailTemplate: {
        result: 'NO',
        name: mockInvite.guests[0].name,
        details: expect.any(String),
      },
    });
  });
});
