import {Component, OnInit} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  myFormGroup: UntypedFormGroup;
  iconCssDefault = new UntypedFormControl();
  iconCssAll = new UntypedFormControl();
  iconCssFa5 = new UntypedFormControl();
  iconCssFa6 = new UntypedFormControl();
  iconCssPrime = new UntypedFormControl();
  iconCssMat = new UntypedFormControl();
  iconCssA = new UntypedFormControl();
  iconCssButton = new UntypedFormControl();
  iconCssSpan = new UntypedFormControl();
  iconCssMulti: UntypedFormControl[] = [];
  fallbackIconDefault = 'fas fa-user';
  fallbackIconAll = 'fa fa-book';
  fallbackIconFa5 = 'fas fa-igloo';
  fallbackIconFa6 = 'coffee';
  fallbackIconPrime = 'pi pi-user';
  fallbackIconMat = 'explore';
  fallbackIconA = 'fas fa-question-circle';
  fallbackIconButton = 'fas fa-igloo';
  fallbackIconSpan = 'fas fa-igloo';
  fallbackIcons: string[] = ['fas fa-question-circle', 'fas fa-igloo'];

  ngOnInit(): void {
    const size = this.fallbackIcons.length;
    for (let i = 0; i < size; i++) {
      this.iconCssMulti.push(new UntypedFormControl());
    }
    this.myFormGroup = new UntypedFormGroup({
      iconCssDefault: this.iconCssDefault,
      iconCssAll: this.iconCssAll,
      iconCssFa5: this.iconCssFa5,
      iconCssFa6: this.iconCssFa6,
      iconCssPrime: this.iconCssPrime,
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

  onIconPickerFa6Select(icon: string): void {
    this.iconCssFa6.setValue(icon);
  }

  onIconPickerMatSelect(icon: string): void {
    this.iconCssMat.setValue(icon);
  }

  onIconPickerPrimeSelect(icon: string): void {
    this.iconCssPrime.setValue(icon);
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
