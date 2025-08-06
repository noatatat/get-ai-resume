import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { RouteHelper } from '@core/services/route-helper/route-helper';

export const metaGuard: CanActivateFn = (route) => {
  const routeHelper = inject(RouteHelper);
  const routeKey = route.data['routeKey'];
  if (routeKey) {
    routeHelper.setMeta(routeKey);
  }
  return true;
};
