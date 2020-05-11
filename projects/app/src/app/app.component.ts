import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  myFormGroup: FormGroup;
  iconCssDefault = new FormControl();
  iconCssAll = new FormControl();
  iconCssFa5 = new FormControl();
  iconCssMat = new FormControl();
  iconCssA = new FormControl();
  iconCssButton = new FormControl();
  iconCssSpan = new FormControl();
  iconCssMulti: FormControl[] = [];
  fallbackIconDefault = 'fas fa-user';
  fallbackIconAll = 'fa fa-book';
  fallbackIconFa5 = 'fas fa-igloo';
  fallbackIconMat = 'explore';
  fallbackIconA = 'fas fa-question-circle';
  fallbackIconButton = 'fas fa-igloo';
  fallbackIconSpan = 'fas fa-igloo';
  fallbackIcons: string[] = ['fas fa-question-circle', 'fas fa-igloo'];

  ngOnInit(): void {
    const size = this.fallbackIcons.length;
    for (let i = 0; i < size; i++) {
      this.iconCssMulti.push(new FormControl());
    }
    this.myFormGroup = new FormGroup({
      iconCssDefault: this.iconCssDefault,
      iconCssAll: this.iconCssAll,
      iconCssFa5: this.iconCssFa5,
      iconCssMat: this.iconCssMat,
      iconCssA: this.iconCssA,
      iconCssButton: this.iconCssButton,
      iconCssSpan: this.iconCssSpan
    });
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

  onIconPickerMatSelect(icon: string): void {
    this.iconCssMat.setValue(icon);
  }

  onIconPickerASelect(icon: string): void {
    this.iconCssA.setValue(icon);
  }

  onIconPickerButtonSelect(icon: string): void {
    this.iconCssButton.setValue(icon);
  }

  onIconPickerSpanSelect(icon: string): void {
    this.iconCssSpan.setValue(icon);
  }

  onIconPickerMultiSelect(icon: string, i: number): void {
    this.iconCssMulti[i].setValue(icon);
  }
}
