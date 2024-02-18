import { TestBed, fakeAsync, flushMicrotasks } from '@angular/core/testing';
import { EmailClientService } from './email-client.service';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

function setup(
  providers?: { provide: any; useValue: any }[]
): EmailClientService {
  let service: EmailClientService;

  TestBed.configureTestingModule({
    providers: [EmailClientService, ...(providers || [])],
  });

  service = TestBed.inject(EmailClientService);
  return service;
}

describe('EmailClientService', () => {
  it('should be created', () => {
    const service = setup();
    expect(service).toBeTruthy();
  });

  describe('the send function', () => {
    it('should return true if email is sent successfully', fakeAsync(() => {
      const service = setup();
      const spy = jest
        .spyOn(emailjs, 'send')
        .mockReturnValue(Promise.resolve({} as EmailJSResponseStatus));

      let result: boolean | undefined;
      service.send({}).subscribe((res) => {
        result = res;
      });

      flushMicrotasks();

      expect(result).toBeTruthy();
      expect(spy).toHaveBeenCalledWith(
        'service_kd7nr4h',
        'template_cwo0fbe',
        {}
      );
    }));

    it('should return false if email send fails', fakeAsync(() => {
      const service = setup();
      const spy = jest
        .spyOn(emailjs, 'send')
        .mockReturnValue(Promise.reject({} as EmailJSResponseStatus));

      let result: boolean | undefined;
      service.send({}).subscribe((res) => {
        result = res;
      });

      flushMicrotasks();

      expect(result).toBeFalsy();
      expect(spy).toHaveBeenCalledWith(
        'service_kd7nr4h',
        'template_cwo0fbe',
        {}
      );
    }));
  });
});
