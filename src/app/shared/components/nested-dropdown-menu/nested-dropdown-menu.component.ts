import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MenuItem } from '../../models/menu-items';

@Component({
  selector: 'app-nested-dropdown-menu',
  templateUrl: './nested-dropdown-menu.component.html',
  styleUrls: ['./nested-dropdown-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NestedDropdownMenuComponent {
  @Input() items: MenuItem[] = [];
}
