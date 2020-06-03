import {Injectable} from '@angular/core';
import {Icon, IconType} from './icon';
import {IconsPack} from './icons-pack';
import {BootstrapIconsPack} from './pack/bootstrap-icons-pack';
import {FontAwesome4IconsPack} from './pack/font-awesome4-icons-pack';
import {FontAwesome5IconsPack} from './pack/font-awesome5-icons-pack';
import {MaterialIconsPack} from './pack/material-icons-pack';

@Injectable()
export class IconPickerService {
  private bsIconPack: IconsPack;
  private fa4IconsPack: IconsPack;
  private fa5IconsPack: IconsPack;
  private matIconsPack: IconsPack;

  constructor() {
    this.bsIconPack = new BootstrapIconsPack();
    this.fa4IconsPack = new FontAwesome4IconsPack();
    this.fa5IconsPack = new FontAwesome5IconsPack();
    this.matIconsPack = new MaterialIconsPack();
  }

  getIcons(ipIconPacks: string[]): Icon[] {
    let icons: Icon[] = [];
    ipIconPacks.forEach((ipIconPack) => {
      if (ipIconPack === 'fa' || ipIconPack === 'all') {
        const faIcons = this.fa4IconsPack.getIcons().map(icon => {
          icon.type = IconType.FONT_AWESEOME;
          return icon;
        });
        icons = icons.concat(faIcons);
      }
      if (ipIconPack === 'bs' || ipIconPack === 'all') {
        const bsIcons = this.bsIconPack.getIcons().map(icon => {
          icon.type = IconType.BOOTSTRAP;
          return icon;
        });
        icons = icons.concat(bsIcons);
      }
      if (ipIconPack === 'fa5' || ipIconPack === 'all') {
        const fa5Icons = this.fa5IconsPack.getIcons().map(icon => {
          icon.type = IconType.FONT_AWESEOME5;
          return icon;
        });
        icons = icons.concat(fa5Icons);
      }
      if (ipIconPack === 'mat' || ipIconPack === 'all') {
        const matIcons = this.matIconsPack.getIcons().map(icon => {
          icon.type = IconType.MATERIAL;
          return icon;
        });
        icons = icons.concat(matIcons);
      }
    });
    return icons;
  }
}
