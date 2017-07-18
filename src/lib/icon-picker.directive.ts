import {
  OnInit, OnChanges, Directive, Input, Output, EventEmitter, ElementRef, ViewContainerRef, ReflectiveInjector, ComponentFactoryResolver
} from '@angular/core';

import { IconPickerComponent } from './icon-picker.component';

@Directive({
  selector: '[iconPicker]',
  host    : {
    '(click)': 'onClick()'
  }
})
export class IconPickerDirective implements OnInit, OnChanges {
  @Input('iconPicker') iconPicker: string;
  @Input('ipPlaceHolder') ipPlaceHolder = 'Search icon...';
  @Input('ipPosition') ipPosition = 'right';
  @Input('ipFallbackIcon') ipFallbackIcon = 'fa fa-user-plus';
  @Input('ipHeight') ipHeight = 'auto';
  @Input('ipMaxHeight') ipMaxHeight = '200px';
  @Input('ipWidth') ipWidth = '230px';
  @Input('ipIconPack') ipIconPack = 'all';

  @Output('iconPickerSelect') iconPickerSelect = new EventEmitter<string>(true);

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
  }

  onClick() {
    this.openDialog();
  }

  openDialog() {
    if (!this.created) {
      this.created = true;
      let vcRef = this.vcRef;
      const compFactory = this.cfr.resolveComponentFactory(IconPickerComponent);
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
