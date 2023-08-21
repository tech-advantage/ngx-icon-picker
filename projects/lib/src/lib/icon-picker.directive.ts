import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Output,
  ViewContainerRef
} from '@angular/core';

import { IconPickerComponent } from './icon-picker.component';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[iconPicker]'
})
export class IconPickerDirective implements OnInit, OnChanges {
  @Input() iconPicker: string;
  @Input() ipPlaceHolder = 'Search icon...';
  @Input() ipPosition = 'right';
  @Input() ipFallbackIcon = 'fas fa-user';
  @Input() ipHeight = 'auto';
  @Input() ipMaxHeight = '200px';
  @Input() ipWidth = '230px';
  @Input() ipIconSize = '16px';
  @Input() ipIconVerticalPadding = '6px'; // Top / Bottom
  @Input() ipIconHorizontalPadding = '10px'; // Left / Right
  @Input() ipIconPack = ['fa5'];
  @Input() ipKeepSearchFilter = 'false';
  @Input() ipUseRootViewContainer = false;
  // Default design with bootstrap
  @Input() ipButtonStyleClass = 'btn btn-default';
  @Input() ipDivSearchStyleClass = '';
  @Input() ipInputSearchStyleClass = 'form-control input-sm';

  @Output() iconPickerSelect = new EventEmitter<string>(true);
  @Output() iconPickerOpen = new EventEmitter<void>(true);
  @Output() iconPickerClose = new EventEmitter<void>(true);
  @Output() iconPickerFocus = new EventEmitter<void>(true);

  @HostListener('focus') handleFocus(): void {
    this.elementFocus();
  }

  private dialog: any;
  private created: boolean;
  private ignoreChanges = false;

  constructor(
    private vcRef: ViewContainerRef,
    private el: ElementRef) {
    this.created = false;
  }

  @HostListener('click')
  onClick() {
    this.openDialog();
  }

  ngOnChanges(changes: any): void {
    if (changes.iconPicker) {
      this.ignoreChanges = false;
    }
  }

  ngOnInit() {
    this.iconPicker = this.iconPicker || this.ipFallbackIcon || 'fa fa-user-plus';
    this.iconPickerSelect.emit(this.iconPicker);
  }

  openDialog() {
    if (!this.created) {
      this.created = true;
      const vcRef = this.vcRef;
      const cmpRef = vcRef.createComponent(IconPickerComponent);
      cmpRef.instance.setDialog(this, this.el, this.iconPicker, this.ipPosition, this.ipHeight, this.ipMaxHeight,
        this.ipWidth, this.ipPlaceHolder, this.ipFallbackIcon, this.ipIconPack, this.ipIconSize,
        this.ipIconVerticalPadding, this.ipIconHorizontalPadding, this.ipButtonStyleClass, this.ipDivSearchStyleClass,
        this.ipInputSearchStyleClass, this.ipKeepSearchFilter, this.ipUseRootViewContainer);
      this.dialog = cmpRef.instance;

      if (this.vcRef !== vcRef) {
        cmpRef.changeDetectorRef.detectChanges();
      }
    } else if (this.dialog) {
      this.dialog.openDialog(this.iconPicker);
    }
  }

  iconSelected(icon: string) {
    this.iconPickerSelect.emit(icon);
  }

  public stateChanged(state: boolean): void {
    if (state) {
      this.iconPickerOpen.emit();
    } else {
      this.iconPickerClose.emit();
    }
  }

  public elementFocus(): void {
    this.iconPickerFocus.emit();
  }
}
