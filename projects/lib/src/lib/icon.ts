import { IconName } from '@fortawesome/fontawesome-svg-core';

export class Icon {
  name: string;
  id: string;
  filter?: string[];
  aliases?: string[];
  type?: IconType;
  iconName?: IconName;
}

export enum IconType {
  FontAwesome,
  FontAwesome5 = 2,
  Material,
  FontAwesome6,
  PrimeIcons
}
