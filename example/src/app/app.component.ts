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
  iconCssAll = new FormControl();
  iconCssFa5 = new FormControl();
  fallbackIconAll = 'fa fa-book';
  fallbackIconFa5 = 'fas fa-igloo';
  icon: string;

  ngOnInit(): void {
    this.myFormGroup = new FormGroup({iconCssAll: this.iconCssAll, iconCssFa5: this.iconCssFa5});
  }

  onIconPickerAllSelect(icon: string): void {
    this.iconCssAll.setValue(icon);
  }

  onIconPickerFa5Select(icon: string): void {
    this.iconCssFa5.setValue(icon);
  }
}
