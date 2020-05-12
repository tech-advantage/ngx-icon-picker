import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.semantic.component.html',
  styleUrls: ['./app.semantic.component.less']
})
export class AppSemanticComponent implements OnInit {
  myFormGroup: FormGroup;
  iconCssFas = new FormControl();
  fallbackIconFas = 'fas fa-user';
  iconCssMat = new FormControl();
  fallbackIconMat = 'aspect_ratio';

  ngOnInit(): void {
    this.myFormGroup = new FormGroup({
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
