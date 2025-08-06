import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'aires-landing-layout',
  imports: [RouterOutlet],
  templateUrl: './landing-layout.html',
  styleUrl: './landing-layout.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingLayout {}
