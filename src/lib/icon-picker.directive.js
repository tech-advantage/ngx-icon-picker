"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var core_1 = require("@angular/core");
var icon_picker_component_1 = require("./icon-picker.component");
var IconPickerDirective = (function () {
  function IconPickerDirective(appRef, vcRef, el, injector, service, cfr, cdr) {
    this.appRef = appRef;
    this.vcRef = vcRef;
    this.el = el;
    this.injector = injector;
    this.service = service;
    this.cfr = cfr;
    this.cdr = cdr;
    this.cpPosition = 'right';
    this.cpPositionOffset = '0%';
    this.cpPositionRelativeToArrow = false;
    this.cpOutputFormat = 'hex';
    this.cpPresetLabel = 'Preset colors';
    this.cpCancelButton = false;
    this.cpCancelButtonClass = 'cp-cancel-button-class';
    this.cpCancelButtonText = 'Cancel';
    this.cpOKButton = false;
    this.cpOKButtonClass = 'cp-ok-button-class';
    this.cpOKButtonText = 'OK';
    this.cpFallbackColor = '#000';
    this.cpHeight = 'auto';
    this.cpWidth = '230px';
    this.cpIgnoredElements = [];
    this.cpDialogDisplay = 'popup';
    this.cpSaveClickOutside = true;
    this.cpAlphaChannel = 'hex6';
    this.cpUseRootViewContainer = false;
    this.colorPickerSelect = new core_1.EventEmitter(true);
    this.colorPickerChange = new core_1.EventEmitter(false);
    this.cpInputChange = new core_1.EventEmitter(true);
    this.cpSliderChange = new core_1.EventEmitter(true);
    this.cpToggleChange = new core_1.EventEmitter(true);
    this.ignoreChanges = false;
    this.created = false;
  }

  IconPickerDirective.prototype.ngOnChanges = function (changes) {
    if (changes.cpToggle) {
      if (changes.cpToggle.currentValue) {
        this.openDialog();
      }
      if (!changes.cpToggle.currentValue && this.dialog) {
        this.dialog.closeColorPicker();
      }
    }
    if (changes.colorPicker) {
      if (this.dialog && !this.ignoreChanges) {
        if (this.cpDialogDisplay === 'inline') {
          this.dialog.setInitialColor(changes.colorPicker.currentValue);
        }
        this.dialog.setColorFromString(changes.colorPicker.currentValue, false);
      }
      this.ignoreChanges = false;
    }
    if (changes.cpPresetLabel || changes.cpPresetColors) {
      if (this.dialog) {
        this.dialog.setPresetConfig(this.cpPresetLabel, this.cpPresetColors);
      }
    }
  };
  IconPickerDirective.prototype.ngOnInit = function () {
    this.colorPicker = this.colorPicker || this.cpFallbackColor || 'rgba(0, 0, 0, 1)';
  };
  IconPickerDirective.prototype.onClick = function () {
    var _this = this;
    if (this.cpIgnoredElements.filter(function (item) {
        return item === _this.el.nativeElement;
      }).length === 0) {
      this.openDialog();
    }
  };
  IconPickerDirective.prototype.openDialog = function () {
    if (!this.created) {
      this.created = true;
      var vcRef = this.vcRef;
      if (this.cpUseRootViewContainer && this.cpDialogDisplay !== 'inline') {
        var classOfRootComponent = this.appRef.componentTypes[0];
        var appInstance = this.injector.get(classOfRootComponent);
        vcRef = appInstance.vcRef || appInstance.viewContainerRef || this.vcRef;
        if (vcRef === this.vcRef) {
          console.warn('You are using cpUseRootViewContainer, but the root component is not exposing viewContainerRef!');
        }
      }
      var compFactory = this.cfr.resolveComponentFactory(icon_picker_component_1.IconPickerComponent);
      var injector = core_1.ReflectiveInjector.fromResolvedProviders([], vcRef.parentInjector);
      var cmpRef = vcRef.createComponent(compFactory, 0, injector, []);
      cmpRef.instance.setDialog(this, this.el, this.colorPicker, this.cpPosition, this.cpPositionOffset, this.cpPositionRelativeToArrow, this.cpOutputFormat, this.cpPresetLabel, this.cpPresetColors, this.cpCancelButton, this.cpCancelButtonClass, this.cpCancelButtonText, this.cpOKButton, this.cpOKButtonClass, this.cpOKButtonText, this.cpHeight, this.cpWidth, this.cpIgnoredElements, this.cpDialogDisplay, this.cpSaveClickOutside, this.cpAlphaChannel, this.cpUseRootViewContainer);
      this.dialog = cmpRef.instance;
      if (this.vcRef !== vcRef) {
        cmpRef.changeDetectorRef.detectChanges();
      }
    }
    else if (this.dialog) {
      this.dialog.openDialog(this.colorPicker);
    }
  };
  IconPickerDirective.prototype.colorChanged = function (value, ignore) {
    if (ignore === void 0) {
      ignore = true;
    }
    this.ignoreChanges = ignore;
    this.colorPickerChange.emit(value);
  };
  IconPickerDirective.prototype.colorSelected = function (value) {
    this.colorPickerSelect.emit(value);
  };
  IconPickerDirective.prototype.inputChanged = function (event) {
    this.cpInputChange.emit(event);
  };
  IconPickerDirective.prototype.sliderChanged = function (event) {
    this.cpSliderChange.emit(event);
  };
  IconPickerDirective.prototype.changeInput = function (value) {
    this.dialog.setColorFromString(value, true);
  };
  IconPickerDirective.prototype.toggle = function (value) {
    this.cpToggleChange.emit(value);
  };
  return IconPickerDirective;
}());
__decorate([
  core_1.Input('colorPicker')
], IconPickerDirective.prototype, "colorPicker");
__decorate([
  core_1.Input('cpToggle')
], IconPickerDirective.prototype, "cpToggle");
__decorate([
  core_1.Input('cpPosition')
], IconPickerDirective.prototype, "cpPosition");
__decorate([
  core_1.Input('cpPositionOffset')
], IconPickerDirective.prototype, "cpPositionOffset");
__decorate([
  core_1.Input('cpPositionRelativeToArrow')
], IconPickerDirective.prototype, "cpPositionRelativeToArrow");
__decorate([
  core_1.Input('cpOutputFormat')
], IconPickerDirective.prototype, "cpOutputFormat");
__decorate([
  core_1.Input('cpPresetLabel')
], IconPickerDirective.prototype, "cpPresetLabel");
__decorate([
  core_1.Input('cpPresetColors')
], IconPickerDirective.prototype, "cpPresetColors");
__decorate([
  core_1.Input('cpCancelButton')
], IconPickerDirective.prototype, "cpCancelButton");
__decorate([
  core_1.Input('cpCancelButtonClass')
], IconPickerDirective.prototype, "cpCancelButtonClass");
__decorate([
  core_1.Input('cpCancelButtonText')
], IconPickerDirective.prototype, "cpCancelButtonText");
__decorate([
  core_1.Input('cpOKButton')
], IconPickerDirective.prototype, "cpOKButton");
__decorate([
  core_1.Input('cpOKButtonClass')
], IconPickerDirective.prototype, "cpOKButtonClass");
__decorate([
  core_1.Input('cpOKButtonText')
], IconPickerDirective.prototype, "cpOKButtonText");
__decorate([
  core_1.Input('cpFallbackColor')
], IconPickerDirective.prototype, "cpFallbackColor");
__decorate([
  core_1.Input('cpHeight')
], IconPickerDirective.prototype, "cpHeight");
__decorate([
  core_1.Input('cpWidth')
], IconPickerDirective.prototype, "cpWidth");
__decorate([
  core_1.Input('cpIgnoredElements')
], IconPickerDirective.prototype, "cpIgnoredElements");
__decorate([
  core_1.Input('cpDialogDisplay')
], IconPickerDirective.prototype, "cpDialogDisplay");
__decorate([
  core_1.Input('cpSaveClickOutside')
], IconPickerDirective.prototype, "cpSaveClickOutside");
__decorate([
  core_1.Input('cpAlphaChannel')
], IconPickerDirective.prototype, "cpAlphaChannel");
__decorate([
  core_1.Input('cpUseRootViewContainer')
], IconPickerDirective.prototype, "cpUseRootViewContainer");
__decorate([
  core_1.Output('colorPickerSelect')
], IconPickerDirective.prototype, "colorPickerSelect");
__decorate([
  core_1.Output('colorPickerChange')
], IconPickerDirective.prototype, "colorPickerChange");
__decorate([
  core_1.Output('cpInputChange')
], IconPickerDirective.prototype, "cpInputChange");
__decorate([
  core_1.Output('cpSliderChange')
], IconPickerDirective.prototype, "cpSliderChange");
__decorate([
  core_1.Output('cpToggleChange')
], IconPickerDirective.prototype, "cpToggleChange");
IconPickerDirective = __decorate([
  core_1.Directive({
    selector: '[iconPicker]',
    host: {
      '(input)': 'changeInput($event.target.value)',
      '(click)': 'onClick()'
    }
  })
], IconPickerDirective);
exports.IconPickerDirective = IconPickerDirective;
