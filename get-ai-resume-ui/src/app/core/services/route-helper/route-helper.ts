import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { APP_ROUTES, AppRouteValue } from '@core/const';

@Injectable({
  providedIn: 'root',
})
export class RouteHelper {
  private title = inject(Title);
  private meta = inject(Meta);

  setMeta(routeKey: string): void {
    const route = this.getRouteByKey(routeKey);

    if (route?.meta) {
      this.title.setTitle(`${route.meta.title} | AI Resume`);

      if (route.meta.description) {
        this.meta.updateTag({
          name: 'description',
          content: route.meta.description,
        });
      }

      if (route.meta.keywords) {
        this.meta.updateTag({
          name: 'keywords',
          content: route.meta.keywords.join(', '),
        });
      }
    }
  }

  private getRouteByKey(key: string): AppRouteValue | null {
    const keys = key.split('.');
    // eslint-disable-next-line
    let current: any = APP_ROUTES;

    for (const k of keys) {
      if (current[k]) {
        current = current[k];
      } else {
        return null;
      }
    }
    return current;
  }
}
