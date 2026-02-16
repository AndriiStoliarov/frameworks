import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const requiredValidator = (
  control: AbstractControl,
): ValidationErrors | null => {
  return control.value ? null : { required: true };
};

export const minLengthValidator =
  (minLength: number): ValidatorFn =>
  ({ value }): ValidationErrors | null =>
    value.value ? null : { minLength: { requiredLength: minLength } };
