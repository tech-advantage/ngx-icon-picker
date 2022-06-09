import {Injectable} from '@angular/core';
import {Icon, IconType} from './icon';
import {IconsPack} from './icons-pack';
import {BootstrapIconsPack} from './pack/bootstrap-icons-pack';
import {FontAwesome4IconsPack} from './pack/font-awesome4-icons-pack';
import {FontAwesome5IconsPack} from './pack/font-awesome5-icons-pack';
import {FontAwesome6IconsPack} from './pack/font-awesome6-icons-pack';
import {MaterialIconsPack} from './pack/material-icons-pack';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Injectable()
export class IconPickerService {
  private bsIconPack: IconsPack;
  private fa4IconsPack: IconsPack;
  private fa5IconsPack: IconsPack;
  private fa6IconsPack: IconsPack;
  private matIconsPack: IconsPack;

  constructor(protected faIconLibrary: FaIconLibrary) {
    this.bsIconPack = new BootstrapIconsPack();
    this.fa4IconsPack = new FontAwesome4IconsPack();
    this.fa5IconsPack = new FontAwesome5IconsPack();
    this.fa6IconsPack = new FontAwesome6IconsPack();
    this.matIconsPack = new MaterialIconsPack();
  }

  getIcons(ipIconPacks: string[]): Icon[] {
    const icons: Icon[] = [];
    ipIconPacks.forEach((ipIconPack) => {
      if (ipIconPack === 'fa' || ipIconPack === 'all') {
        const faIcons = this.fa4IconsPack.getIcons().map(icon => {
          icon.type = IconType.FontAwesome;
          return icon;
        });
        icons.push(...faIcons);
      }
      if (ipIconPack === 'bs' || ipIconPack === 'all') {
        const bsIcons = this.bsIconPack.getIcons().map(icon => {
          icon.type = IconType.Bootstrap;
          return icon;
        });
        icons.push(...bsIcons);
      }
      if (ipIconPack === 'fa5' || ipIconPack === 'all') {
        const fa5Icons = this.fa5IconsPack.getIcons().map(icon => {
          icon.type = IconType.FontAwesome5;
          return icon;
        });
        icons.push(...fa5Icons);
      }
      if (ipIconPack === 'fa6' || ipIconPack === 'all') {
        this.faIconLibrary.addIconPacks(fas);
        const fa6Icons = this.fa6IconsPack.getIcons().map(icon => {
           icon.type = IconType.FontAwesome6;
          return icon;
        });
        icons.push(...fa6Icons);
      }
      if (ipIconPack === 'mat' || ipIconPack === 'all') {
        const matIcons = this.matIconsPack.getIcons().map(icon => {
          icon.type = IconType.Material;
          return icon;
        });
        icons.push(...matIcons);
      }
    });
    return icons;
  }
}
