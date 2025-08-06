import { Routes } from '@angular/router';
import { LandingLayout } from '@shared/ui/layouts';
import { Landing } from '@features/landing/landing';
import { APP_ROUTES } from '@core/const';

export const landingRoutes: Routes = [
  {
    path: APP_ROUTES['ROOT'].path,
    component: LandingLayout,
    children: [
      {
        path: APP_ROUTES['ROOT'].path,
        component: Landing,
      },
    ],
  },
];
