import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import {
  EnvironmentProviders,
  inject,
  provideAppInitializer,
  Provider,
} from '@angular/core';
import { IconsService } from '@core/services';

export const materialProviders: (Provider | EnvironmentProviders)[] = [
  {
    provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
    useValue: {
      appearance: 'outline',
      floatLabel: 'auto',
    },
  },
  // IconsService,
  provideAppInitializer(() => {
    const iconsService = inject(IconsService);
    return iconsService.init();
  }),
];
