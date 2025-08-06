import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { VIEWPORT_STATE } from '@core/providers';
import { AccountActions, MainNav } from '@shared/ui/widgets';

@Component({
  selector: 'aires-header',
  imports: [NgOptimizedImage, MainNav, AccountActions],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  readonly logoColor = input<'light' | 'dark'>('light');

  protected readonly bp = inject(VIEWPORT_STATE);
}
