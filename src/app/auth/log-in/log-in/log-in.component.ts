import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  @Output() signUpEmit: EventEmitter<{ email: string, password: string }> = new EventEmitter();
  form: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });
  }

  public getErrorMessageEmail() {
    return this.form.get('email')['errors']['required'] ? 'You must enter a E-mail' :
      this.form.get('email')['errors']['email'] ? 'Not a valid E-mail' :
        '';
  }

  public getErrorMessagePassword() {
    return this.form.get('password')['errors']['required'] ? 'Password is Required' :
      this.form.get('password')['errors']['minlength'] ? `Password must contain at least  ${this.form.get('password')['errors']['minlength']['requiredLength']} characters.` :
        '';
  }

  public onSubmit(): void {
    this.signUpEmit.emit({
      email: this.form.value.email,
      password: this.form.value.password
    });
  }

}
