import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IS_MOBILE } from '@core/providers/breakpoints';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'aires-root',
  imports: [RouterOutlet, JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly title = signal('get-ai-resume-ui');

  bpsd = inject(IS_MOBILE);
}
