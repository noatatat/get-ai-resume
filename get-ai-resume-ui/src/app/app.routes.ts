import { Routes } from '@angular/router';
import { APP_ROUTES } from '@core/const';
import { metaGuard } from '@core/guards';

/**
 * Main application routes
 * Features are lazy-loaded for better performance
 */
export const routes: Routes = [
  {
    path: APP_ROUTES['ROOT'].path,
    pathMatch: 'full',
    canActivate: [metaGuard],
    loadChildren: () =>
      import('./features/landing/landing.routes').then((m) => m.landingRoutes),
    data: {
      routeKey: 'ROOT',
    },
  },

  // {
  //   path: '**',
  //   redirectTo: 'dashboard'
  // }
];
