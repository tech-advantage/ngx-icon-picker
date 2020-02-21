export class Icon {
  name: string;
  id: string;
  filter?: string[];
  aliases?: string[];
  type?: IconType;
}

export enum IconType {
  FONT_AWESEOME,
  BOOTSTRAP,
  FONT_AWESEOME5
}
