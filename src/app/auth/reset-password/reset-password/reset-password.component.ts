import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  @Output() resetPassEmit: EventEmitter<{ email: string }> = new EventEmitter();
  form: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
    });
  }

  public getErrorMessageEmail() {
    return this.form.get('email')['errors']['required'] ? 'You must enter a E-mail' :
      this.form.get('email')['errors']['email'] ? 'Not a valid E-mail' :
        '';
  }

  public onSubmit(): void {
    this.resetPassEmit.emit({
      email: this.form.value.email
    });
  }
}
