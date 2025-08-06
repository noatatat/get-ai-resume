import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Header } from '@shared/ui/widgets/header/header';

@Component({
  selector: 'aires-landing',
  imports: [Header],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Landing {}
