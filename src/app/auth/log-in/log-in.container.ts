import {Component} from '@angular/core';

@Component({
  selector: 'app-log-in-container',
  template: `
    <app-log-in
      (signInEmit)="signIn($event)"
    ></app-log-in>`
})
export class LogInContainer {
  public signIn(credentials: { userName: string, password: string }): void {
    console.log(credentials);
  }
}

