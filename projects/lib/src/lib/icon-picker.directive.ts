import {
  OnInit, OnChanges, Directive, Input, Output, EventEmitter, ElementRef, ViewContainerRef, ReflectiveInjector, ComponentFactoryResolver
} from '@angular/core';

import { IconPickerComponent } from './icon-picker.component';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[iconPicker]',
  // tslint:disable-next-line: no-host-metadata-property
  host    : {
    '(click)': 'onClick()'
  }
})
export class IconPickerDirective implements OnInit, OnChanges {
  @Input() iconPicker: string;
  @Input() ipPlaceHolder = 'Search icon...';
  @Input() ipPosition = 'right';
  @Input() ipFallbackIcon = 'fas fa-user';
  @Input() ipHeight = 'auto';
  @Input() ipMaxHeight = '200px';
  @Input() ipWidth = '230px';
  @Input() ipIconPack = ['bs', 'fa5'];

  @Output() iconPickerSelect = new EventEmitter<string>(true);

  private dialog: any;
  private created: boolean;
  private ignoreChanges = false;

  constructor(
    private vcRef: ViewContainerRef,
    private el: ElementRef,
    private cfr: ComponentFactoryResolver) {
    this.created = false;
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

  onClick() {
    this.openDialog();
  }

  openDialog() {
    if (!this.created) {
      this.created = true;
      const vcRef = this.vcRef;
      const compFactory = this.cfr.resolveComponentFactory(IconPickerComponent);
      // tslint:disable-next-line: deprecation
      const injector = ReflectiveInjector.fromResolvedProviders([], vcRef.parentInjector);
      const cmpRef = vcRef.createComponent(compFactory, 0, injector, []);
      cmpRef.instance.setDialog(this, this.el, this.iconPicker, this.ipPosition, this.ipHeight, this.ipMaxHeight,
        this.ipWidth, this.ipPlaceHolder, this.ipFallbackIcon, this.ipIconPack);
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

}
