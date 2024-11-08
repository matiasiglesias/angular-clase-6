import { AbstractControl, ValidatorFn } from '@angular/forms';

export function nombreValido(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const esValido = /^[a-zA-Z]+$/.test(control.value);
    return esValido ? null : { nombreInvalido: { value: control.value } };
  };
}
