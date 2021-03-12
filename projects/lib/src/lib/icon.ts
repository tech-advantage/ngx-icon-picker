export class Icon {
  name: string;
  id: string;
  filter?: string[];
  aliases?: string[];
  type?: IconType;
}

export enum IconType {
  FontAwesome,
  Bootstrap,
  FontAwesome5,
  Material,
}
