import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { merge } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  emailmy: string = 'lp2017230143@gmail.com';
  formForWhatsApp: FormGroup;

  emailErrorMessage = '';
  emptyFieldErrorMessage = '';

  constructor(private fb: FormBuilder) {
    this.formForWhatsApp = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });

    merge(
      this.formForWhatsApp.get('email')!.statusChanges,
      this.formForWhatsApp.get('email')!.valueChanges,
      this.formForWhatsApp.get('name')!.statusChanges,
      this.formForWhatsApp.get('name')!.valueChanges,
      this.formForWhatsApp.get('message')!.statusChanges,
      this.formForWhatsApp.get('message')!.valueChanges
    )
      .pipe(takeUntilDestroyed())
      .subscribe(() => {
        this.updateEmailErrorMessage();
        this.updateEmptyFieldErrorMessage();
      });
  }

  ngOnInit(): void {}

  updateEmailErrorMessage() {
    const emailControl = this.formForWhatsApp.get('email');
    if (emailControl!.hasError('required')) {
      this.emailErrorMessage = 'You must enter a value';
    } else if (emailControl!.hasError('email')) {
      this.emailErrorMessage = 'Not a valid email';
    } else {
      this.emailErrorMessage = '';
    }
  }

  updateEmptyFieldErrorMessage() {
    const nameControl = this.formForWhatsApp.get('name');
    const messageControl = this.formForWhatsApp.get('message');
    if (
      nameControl!.hasError('required') ||
      messageControl!.hasError('required')
    ) {
      this.emptyFieldErrorMessage = 'This field cannot be empty';
    } else {
      this.emptyFieldErrorMessage = '';
    }
  }

  onSubmit() {
    if (this.formForWhatsApp.valid) {
      console.log('Form Submitted!', this.formForWhatsApp.value);
      // POST request logic goes here (google apps script deployment URL)
      fetch(
        'https://script.google.com/macros/s/AKfycbwPQjWkp2TthHc5sex5EtP0wdqZ2DCDg7WsHF9XdidxdumQ_Lc8f4BM5QU7FNnKAFN8/exec',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.formForWhatsApp.value),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } else {
      console.log('Form is invalid!');
    }
  }
}
