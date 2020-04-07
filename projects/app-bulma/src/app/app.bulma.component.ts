import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.bulma.component.html',
  styleUrls: ['./app.bulma.component.less']
})
export class AppBulmaComponent implements OnInit {
  myFormGroup: FormGroup;
  iconCssDefault = new FormControl();
  fallbackIconDefault = 'fas fa-user';

  ngOnInit(): void {
    this.myFormGroup = new FormGroup({
      iconCssDefault: this.iconCssDefault
    });
  }

  onIconPickerDefaultSelect(icon: string): void {
    this.iconCssDefault.setValue(icon);
  }
}
