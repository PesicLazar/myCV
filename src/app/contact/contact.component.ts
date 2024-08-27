import { Component, OnInit, signal } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { merge } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  emailmy: string = 'lp2017230143@gmail.com';
  ngOnInit(): void {}

  readonly name = new FormControl('', [Validators.required]);
  readonly email = new FormControl('', [Validators.required, Validators.email]);
  readonly message = new FormControl('', [Validators.required]);

  emailErrorMessage = signal('');
  emptyFieldErrorMessage = signal('');

  constructor() {
    merge(
      this.email.statusChanges,
      this.email.valueChanges,
      this.name.statusChanges,
      this.name.valueChanges,
      this.message.statusChanges,
      this.message.valueChanges
    )
    .pipe(takeUntilDestroyed())
    .subscribe(() => {
      this.updateEmailErrorMessage();
      this.updateEmptyFieldErrorMessage();
    });
  }

  updateEmailErrorMessage() {
    if (this.email.hasError('required')) {
      this.emailErrorMessage.set('You must enter a value');
    } else if (this.email.hasError('email')) {
      this.emailErrorMessage.set('Not a valid email');
    } else {
      this.emailErrorMessage.set('');
    }
  }
  updateEmptyFieldErrorMessage() {
    if (this.name.hasError('required') || this.message.hasError('required')) {
      this.emptyFieldErrorMessage.set('This field cannot be empty');
    } else {
      this.emptyFieldErrorMessage.set('');
    }
  }
}
