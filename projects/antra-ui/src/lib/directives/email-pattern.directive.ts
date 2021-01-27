import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { CustomValidationService } from '../services/custom-validation.service';

@Directive({
  selector: '[antraEmailPattern]',
  providers: [{ provide: NG_VALIDATORS, useExisting: EmailPatternDirective, multi: true }]
})
export class EmailPatternDirective implements Validator {
  constructor(private customValidator?: CustomValidationService) {}

  validate(control: AbstractControl): { [key: string]: any } | null {
    return this.customValidator.emailPatternValidator()(control);
  }
}
