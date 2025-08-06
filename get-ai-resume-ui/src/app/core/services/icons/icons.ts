import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class IconsService {
  private iconRegistry = inject(MatIconRegistry);
  private sanitizer = inject(DomSanitizer);
  private platformId = inject(PLATFORM_ID);

  init(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.registerDefaultIcons();
      this.registerNamespaceIcons();
    }
  }

  private registerDefaultIcons(): void {
    // Отдельные иконки
    // this.iconRegistry.addSvgIcon(
    //   'dashboard',
    //   this.getIconUrl('dashboard.svg'),
    // );
    // Набор иконок
    // this.iconRegistry.addSvgIconSet(this.getIconUrl('main-set.svg'));
  }

  private registerNamespaceIcons(): void {
    this.iconRegistry.addSvgIconSetInNamespace(
      'main',
      this.getIconUrl('main-set.svg'),
    );
  }

  private getIconUrl(iconName: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `./assets/icons/${iconName}`,
    );
  }
}
