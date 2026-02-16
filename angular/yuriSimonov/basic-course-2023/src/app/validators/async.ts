import { AbstractControl } from '@angular/forms';
import { delay, map, of } from 'rxjs';

export const asyncRequiredValidator = (control: AbstractControl) => {
  return of(control.value).pipe(
    delay(2000),
    map((value) => (value ? null : { required: true })),
  );
};
