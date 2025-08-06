import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { VIEWPORT_STATE } from '@core/providers';

@Component({
  selector: 'aires-account-actions',
  imports: [MatButtonModule, MatIcon],
  templateUrl: './account-actions.html',
  styleUrl: './account-actions.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountActions {
  readonly bp = inject(VIEWPORT_STATE);
}
