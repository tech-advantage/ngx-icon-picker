import {Component, OnInit} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.bulma.component.html',
  styleUrls: ['./app.bulma.component.less']
})
export class AppBulmaComponent implements OnInit {
  myFormGroup: UntypedFormGroup;
  iconCssFas = new UntypedFormControl();
  fallbackIconFas = 'fas fa-user';
  iconCssMat = new UntypedFormControl();
  fallbackIconMat = 'aspect_ratio';

  ngOnInit(): void {
    this.myFormGroup = new UntypedFormGroup({
      iconCssFas: this.iconCssFas,
      iconCssMat: this.iconCssMat
    });
  }

  onIconPickerFasSelect(icon: string): void {
    this.iconCssFas.setValue(icon);
  }

  onIconPickerMatSelect(icon: string): void {
    this.iconCssMat.setValue(icon);
  }
}
