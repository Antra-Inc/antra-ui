import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class CustomValidationService {
  passwordPattern: string;

  patternValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }

      const regex = new RegExp(this.passwordPattern);
      const valid = regex.test(control.value);
      return valid ? null : { invalidPassword: true };
    };
  }
}
