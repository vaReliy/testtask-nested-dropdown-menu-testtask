import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { MenuItem } from '../../../models/menu-items';

type FaMenuItem = MenuItem & { icon: IconProp };

@Component({
  selector: 'app-ndm-item',
  templateUrl: './ndm-item.component.html',
  styleUrls: ['./ndm-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NdmItemComponent {
  innerItemAsFa: FaMenuItem | null = null;

  @Input() set item(item: MenuItem) {
    this.innerItemAsFa = item as any as FaMenuItem;
  }

  getItemWithLink(item: MenuItem, parentRoute = '/'): MenuItem {
    item.route = `${parentRoute}/${item.route}`;

    return item;
  }

  trackByFn(index: number, item: MenuItem): string {
    return item.icon;
  }
}
