import { Routes } from '@angular/router';

/**
 * Main application routes
 * Features are lazy-loaded for better performance
 */
export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./features/landing/landing.routes').then((r) => r.landingRoutes),
  },
  // {
  //   path: '**',
  //   redirectTo: 'dashboard'
  // }
];
