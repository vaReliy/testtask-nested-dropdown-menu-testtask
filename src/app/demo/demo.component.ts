import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuItem } from '../shared/models/menu-items';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoComponent {
  mockMenuItemList: MenuItem[] = [
    {
      icon: 'users',
      title: 'Users',
      route: 'user',
      children: [
        { icon: 'user-tag', title: 'User Tag', route: 'tag', children: [] },
        {
          icon: 'user-shield',
          title: 'User Shield sadasd sadasd adas dasd asd asd ads',
          route: 'shield',
          children: [
            {
              icon: 'skiing',
              title: 'User Skiing',
              route: 'item2',
              children: [
                {
                  icon: 'sleigh',
                  title: 'Sleigh',
                  route: 'sleigh',
                  children: [],
                },
              ],
            },
            {
              icon: 'skating',
              title: 'User Skating',
              route: 'item2',
              children: [],
            },
          ],
        },
        { icon: 'user-md', title: 'User Md', route: 'md', children: [] },
      ],
    },
    { icon: 'snowman', title: 'Snowman', route: 'snowman', children: [] },
    { icon: 'snowflake', title: 'Snowflake', route: 'snowflake', children: [] },
  ];
}
