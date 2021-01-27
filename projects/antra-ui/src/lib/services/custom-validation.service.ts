import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class CustomValidationService {
  passwordPattern: string;
  emailPattern: string;

  // Password Pattern Validation
  passwordPatternValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      const regex = new RegExp(this.passwordPattern);
      const valid = regex.test(control.value);
      return valid ? null : { invalidPassword: true };
    };
  }
  // Email Pattern Validation
  emailPatternValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      const regex = new RegExp(this.emailPattern);
      const valid = regex.test(control.value);
      return valid ? null : { invalidEmail: true };
    };
  }
  // Matching Password with ConfirmPassword
  matchPassword(password: string, confirmPassword: string): any {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (confirmPasswordControl.errors && !confirmPasswordControl.errors.passwordMismatch) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    };
  }
}
