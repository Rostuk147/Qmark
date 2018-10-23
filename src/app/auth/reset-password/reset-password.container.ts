import {Component} from '@angular/core';

@Component({
  selector: 'app-log-in-container',
  template: `
    <app-reset-password
      (signInEmit)="signIn($event)"
    ></app-reset-password>`
})
export class ResetPasswordContainer {
  public signIn(credentials: { userName: string, password: string }): void {
    console.log(credentials);
  }
}

