import { EnvironmentProviders, Provider } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { materialProviders } from '@app/core/providers/material';

/**
 * Core configuration providers
 * This file contains providers that should be initialized only once in the application
 */
export const coreProviders: (Provider | EnvironmentProviders)[] = [
  materialProviders,
  // HTTP Client with interceptors
  provideHttpClient(),
  // Add your interceptors here
  // withInterceptors([
  //   authInterceptor,
  //   errorInterceptor,
  // ])

  // Add other core providers here
];
