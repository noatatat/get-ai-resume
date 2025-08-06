import { Routes } from '@angular/router';
import { LandingLayout } from '@shared/ui/layouts';
import { Landing } from '@features/landing/landing';

export const landingRoutes: Routes = [
  {
    path: '',
    component: LandingLayout,
    children: [
      {
        path: '',
        component: Landing,
      },
    ],
  },
];
