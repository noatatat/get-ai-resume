import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MainNavList } from '@shared/ui/widgets/main-nav/main-nav.const';
import { MatListItem, MatNavList } from '@angular/material/list';

@Component({
  selector: 'aires-main-nav',
  imports: [MatNavList, MatListItem],
  templateUrl: './main-nav.html',
  styleUrl: './main-nav.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainNav {
  protected readonly list = MainNavList;
}
