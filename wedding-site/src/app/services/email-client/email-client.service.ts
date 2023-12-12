import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { from, Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const publicKey = environment.emailClientPublicKey;

@Injectable({
  providedIn: 'root',
})
export class EmailClientService {
  constructor() {
    emailjs.init(publicKey);
  }

  public send(payload: Record<string, unknown>): Observable<boolean> {
    return from(
      emailjs.send('service_kd7nr4h', 'template_mak2x2d', payload)
    ).pipe(
      map(() => true),
      catchError(() => of(false))
    );
  }
}
