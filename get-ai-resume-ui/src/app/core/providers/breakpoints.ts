import { computed, inject, InjectionToken, Signal } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

export const VIEWPORT_STATE = new InjectionToken('VIEWPORT_STATE', {
  providedIn: 'root',
  factory: (): Record<
    'isMobile' | 'isTablet' | 'isDesktop',
    Signal<boolean>
  > => {
    const breakpointObserver = inject(BreakpointObserver);

    return {
      isMobile: toSignal(
        breakpointObserver
          .observe([
            Breakpoints.HandsetPortrait,
            // Breakpoints.HandsetLandscape,
            // Breakpoints.TabletPortrait
          ])
          .pipe(map((state) => state.matches)),
        { initialValue: false },
      ),

      isTablet: toSignal(
        breakpointObserver
          .observe([Breakpoints.Tablet, Breakpoints.TabletLandscape])
          .pipe(map((state) => state.matches)),
        { initialValue: false },
      ),

      isDesktop: toSignal(
        breakpointObserver
          .observe([Breakpoints.Web, Breakpoints.WebLandscape])
          .pipe(map((state) => state.matches)),
        { initialValue: true },
      ),
    };
  },
});

export const IS_MOBILE = new InjectionToken('IS_MOBILE', {
  providedIn: 'root',
  factory: (): Signal<boolean> => {
    const viewport = inject(VIEWPORT_STATE);
    return computed(() => viewport.isMobile());
  },
});
