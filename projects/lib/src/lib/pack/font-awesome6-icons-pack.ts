import { Icon } from '../icon';
import { IconsPack } from '../icons-pack';

export class FontAwesome6IconsPack implements IconsPack {
  public getIcons(): Icon[] {
    return [
      {
        id: 'code',
        name: 'Code',
        iconName: 'code',
        filter: [
          'code',
          'solid',
          'free'
        ]
      },
      {
        id: 'coffee',
        name: 'Coffee',
        iconName: 'coffee',
        filter: [
          'code',
          'solid',
          'business',
          'coffee',
          'beverage',
          'hotel',
          'household',
          'free',
          'interface',
          'map',
          'object'
        ]
      }
    ];
  }
}
