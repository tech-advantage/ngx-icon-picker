import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalDialogComponent} from './modal/modal.dialog';

@Component({
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.less']
})
export class AppComponent implements OnInit {
  myFormGroup: FormGroup;
  iconCssDefault = new FormControl();
  iconCssAll = new FormControl();
  iconCssFa5 = new FormControl();
  fallbackIconDefault = 'fas fa-user';
  fallbackIconAll = 'fa fa-book';
  fallbackIconFa5 = 'fas fa-igloo';
  icon: string;

  ngOnInit(): void {
    this.myFormGroup = new FormGroup({
      iconCssDefault: this.iconCssDefault,
      iconCssAll: this.iconCssAll,
      iconCssFa5: this.iconCssFa5});
  }

  onIconPickerDefaultSelect(icon: string): void {
    this.iconCssDefault.setValue(icon);
  }

  onIconPickerAllSelect(icon: string): void {
    this.iconCssAll.setValue(icon);
  }

  onIconPickerFa5Select(icon: string): void {
    this.iconCssFa5.setValue(icon);
  }
}
