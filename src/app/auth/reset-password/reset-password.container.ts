import {Component} from '@angular/core';

@Component({
  selector: 'app-log-in-container',
  template: `
    <app-reset-password
      (resetPassEmit)="resetPass($event)"
    ></app-reset-password>`
})
export class ResetPasswordContainer {
  public resetPass(credentials: { email: string }): void {
    console.log(credentials);
  }
}

