import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import {
  MatFormFieldDefaultOptions,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from '@angular/material/form-field';

// Add Mat Modules here
const MODULES = [MatCardModule];
const APPEARANCE: MatFormFieldDefaultOptions = {
  appearance: 'outline',
};

@NgModule({
  imports: MODULES,
  exports: MODULES,
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: APPEARANCE,
    },
  ],
})
export class MaterialModule {}
