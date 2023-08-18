import { Pipe, PipeTransform } from '@angular/core';
import { Icon } from './icon';

@Pipe({
  name: 'searchIcon'
})

export class SearchIconPipe implements PipeTransform {

  transform(value: Icon[], search: string): Icon[] {
    if (!search) {
      return value;
    }

    const searchValue = this.clean(search);

    return value.filter(icon => {
      let keep = false;
      if (icon.name) {
        keep = keep || this.clean(icon.name).includes(searchValue);
      }
      if (icon.id) {
        keep = keep || this.clean(icon.id).includes(searchValue);
      }
      if (icon.filter) {
        keep = keep || icon.filter.some(filter => this.clean(filter).includes(searchValue));
      }
      if (icon.aliases) {
        keep = keep || icon.aliases.some(alias => this.clean(alias).includes(searchValue));
      }
      return keep;
    });
  }

  clean(value: string): string {
    return value.trim().toLowerCase();
  }
}
