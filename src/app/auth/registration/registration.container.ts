import {Component} from '@angular/core';

@Component({
  selector: 'app-log-in-container',
  template: `
    <app-registration
      (signInEmit)="signIn($event)"
    ></app-registration>`
})
export class RegistrationContainer {
  public signIn(credentials: { userName: string, password: string }): void {
    console.log(credentials);
  }
}

