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
          .observe([Breakpoints.XSmall])
          .pipe(map((state) => state.matches)),
        { initialValue: false },
      ),

      isTablet: toSignal(
        breakpointObserver
          .observe([Breakpoints.Small])
          .pipe(map((state) => state.matches)),
        { initialValue: false },
      ),

      isDesktop: toSignal(
        breakpointObserver
          .observe([Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge])
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

export const IS_TABLET = new InjectionToken('IS_TABLET', {
  providedIn: 'root',
  factory: (): Signal<boolean> => {
    const viewport = inject(VIEWPORT_STATE);
    return computed(() => viewport.isTablet());
  },
});

export const IS_DESKTOP = new InjectionToken('IS_DESKTOP', {
  providedIn: 'root',
  factory: (): Signal<boolean> => {
    const viewport = inject(VIEWPORT_STATE);
    return computed(() => viewport.isDesktop());
  },
});
