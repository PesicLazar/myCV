import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { merge } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  emailmy: string = 'lp2017230143@gmail.com';
  phonemy: string = '+381693006690'
  formForWhatsApp: FormGroup;

  emailErrorMessage = '';
  emptyFieldErrorMessage = '';

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
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
      const formData = new FormData();
      formData.append('entry.828190814', this.formForWhatsApp.value.name);
      formData.append('entry.783380545', this.formForWhatsApp.value.email);
      formData.append('entry.563526280', this.formForWhatsApp.value.message);
  
      fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLSc5aeoe9_uvFN8PBXtYzGTBgl2V2KGqGJzhbYTDrvzcsveFHw/formResponse', {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      }).then(() => {
         this.openSnackBar('Message sent successfully!', 'Close');
      }).catch((error) => {
        this.openSnackBar('Failed to send message.', 'Close');
      });
    } else {
      this.openSnackBar('Form is invalid. Please fix errors.', 'Close');
    }
  }
    openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }
}

/* POST */
/* Google Form's POST URL */
/* https://docs.google.com/forms/u/0/d/e/1FAIpQLSc5aeoe9_uvFN8PBXtYzGTBgl2V2KGqGJzhbYTDrvzcsveFHw/formResponse */
/* form codes */
/* entry.828190814	"name"
entry.783380545	"email"
entry.563526280	"massage" */