import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors, FormGroup } from '@angular/forms';
import { CustomValidationService } from '../services/custom-validation.service';

@Directive({
  selector: '[antraMatchPassword]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MatchPasswordDirective, multi: true }],
})
export class MatchPasswordDirective {
  @Input('antraMatchPassword') matchPassword: string[] = [];

  constructor(private customValidationService?: CustomValidationService) {}

  validate(formGroup: FormGroup): ValidationErrors {
    return this.customValidationService.matchPassword(this.matchPassword[0], this.matchPassword[1])(formGroup);
  }
}
