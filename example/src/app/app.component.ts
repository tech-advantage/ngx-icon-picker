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
  iconCss = new FormControl();
  fallbackIcon = 'fa fa-book';
  icon: string;

  ngOnInit(): void {
    this.myFormGroup = new FormGroup({iconCss: this.iconCss});
  }

  onIconPickerSelect(icon: string): void {
    this.iconCss.setValue(icon);
  }
}
