import {Component} from '@angular/core';

@Component({
  selector: 'app-log-in-container',
  template: `
    <app-log-in
      (signUpEmit)="signUp($event)"
    ></app-log-in>`
})
export class LogInContainer {
  public signUp(credentials: { userName: string, password: string }): void {
    console.log(credentials);
  }
}

