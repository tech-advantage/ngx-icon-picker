"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var core_1 = require("@angular/core");
var IconPickerComponent = (function () {
  function IconPickerComponent(el, cdr, service) {
    this.el = el;
    this.cdr = cdr;
    this.service = service;
    this.dialogArrowSize = 10;
    this.dialogArrowOffset = 15;
    this.useRootViewContainer = false;
  }

  IconPickerComponent.prototype.setDialog = function (instance, elementRef, color, cpPosition, cpPositionOffset, cpPositionRelativeToArrow, cpOutputFormat, cpPresetLabel, cpPresetColors, cpCancelButton, cpCancelButtonClass, cpCancelButtonText, cpOKButton, cpOKButtonClass, cpOKButtonText, cpHeight, cpWidth, cpIgnoredElements, cpDialogDisplay, cpSaveClickOutside, cpAlphaChannel, cpUseRootViewContainer) {
    this.directiveInstance = instance;
    this.initialColor = color;
    this.directiveElementRef = elementRef;
    this.cpPosition = cpPosition;
    this.cpPositionOffset = parseInt(cpPositionOffset);
    if (!cpPositionRelativeToArrow) {
      this.dialogArrowOffset = 0;
    }
    this.cpOutputFormat = cpOutputFormat;
    this.cpPresetLabel = cpPresetLabel;
    this.cpPresetColors = cpPresetColors;
    this.cpCancelButton = cpCancelButton;
    this.cpCancelButtonClass = cpCancelButtonClass;
    this.cpCancelButtonText = cpCancelButtonText;
    this.cpOKButton = cpOKButton;
    this.cpOKButtonClass = cpOKButtonClass;
    this.cpOKButtonText = cpOKButtonText;
    this.cpHeight = parseInt(cpHeight);
    this.cpWidth = parseInt(cpWidth);
    if (!this.cpWidth) {
      this.cpWidth = elementRef.nativeElement.offsetWidth;
    }
    this.cpIgnoredElements = cpIgnoredElements;
    this.cpDialogDisplay = cpDialogDisplay;
    if (this.cpDialogDisplay === 'inline') {
      this.dialogArrowOffset = 0;
      this.dialogArrowSize = 0;
    }
    this.cpSaveClickOutside = cpSaveClickOutside;
    this.cpAlphaChannel = cpAlphaChannel;
    this.useRootViewContainer = cpUseRootViewContainer;
  };
  IconPickerComponent.prototype.ngOnInit = function () {
    var _this = this;
    // let alphaWidth = this.alphaSlider.nativeElement.offsetWidth;
    // let hueWidth = this.hueSlider.nativeElement.offsetWidth;
    // this.sliderDimMax = new SliderDimension(hueWidth, this.cpWidth, 130, alphaWidth);
    // this.slider = new SliderPosition(0, 0, 0, 0);
    if (this.cpOutputFormat === 'rgba') {
      this.format = 1;
    }
    else if (this.cpOutputFormat === 'hsla') {
      this.format = 2;
    }
    else {
      this.format = 0;
    }
    this.listenerMouseDown = function (event) {
      _this.onMouseDown(event);
    };
    this.listenerResize = function () {
      _this.onResize();
    };
    this.openDialog(this.initialColor, false);
  };
  IconPickerComponent.prototype.ngAfterViewInit = function () {
    if (this.cpWidth != 230) {
      // let alphaWidth = this.alphaSlider.nativeElement.offsetWidth;
      // let hueWidth = this.hueSlider.nativeElement.offsetWidth;
      // this.sliderDimMax = new SliderDimension(hueWidth, this.cpWidth, 130, alphaWidth);
      this.update(false);
      this.cdr.detectChanges();
    }
  };
  IconPickerComponent.prototype.setInitialColor = function (color) {
    this.initialColor = color;
  };
  IconPickerComponent.prototype.setPresetConfig = function (cpPresetLabel, cpPresetColors) {
    this.cpPresetLabel = cpPresetLabel;
    this.cpPresetColors = cpPresetColors;
  };
  IconPickerComponent.prototype.openDialog = function (color, emit) {
    if (emit === void 0) {
      emit = true;
    }
    this.setInitialColor(color);
    // this.setColorFromString(color, emit);
    this.openColorPicker();
  };
  IconPickerComponent.prototype.cancelColor = function () {
    // this.setColorFromString(this.initialColor, true);
    if (this.cpDialogDisplay === 'popup') {
      this.directiveInstance.colorChanged(this.initialColor, true);
      this.closeColorPicker();
    }
  };
  IconPickerComponent.prototype.oKColor = function () {
    if (this.cpDialogDisplay === 'popup') {
      this.closeColorPicker();
    }
    if (this.outputColor) {
      this.directiveInstance.colorSelected(this.outputColor);
    }
  };
  IconPickerComponent.prototype.onMouseDown = function (event) {
    if ((!this.isDescendant(this.el.nativeElement, event.target)
      && event.target != this.directiveElementRef.nativeElement &&
      this.cpIgnoredElements.filter(function (item) {
        return item === event.target;
      }).length === 0) && this.cpDialogDisplay === 'popup') {
      if (!this.cpSaveClickOutside) {
        // this.setColorFromString(this.initialColor, false);
        this.directiveInstance.colorChanged(this.initialColor);
      }
      this.closeColorPicker();
    }
  };
  IconPickerComponent.prototype.openColorPicker = function () {
    var _this = this;
    if (!this.show) {
      this.show = true;
      this.hidden = true;
      setTimeout(function () {
        _this.setDialogPosition();
        _this.hidden = false;
        _this.cdr.detectChanges();
      }, 0);
      this.directiveInstance.toggle(true);
      document.addEventListener('mousedown', this.listenerMouseDown);
      window.addEventListener('resize', this.listenerResize);
    }
  };
  IconPickerComponent.prototype.closeColorPicker = function () {
    if (this.show) {
      this.show = false;
      this.directiveInstance.toggle(false);
      document.removeEventListener('mousedown', this.listenerMouseDown);
      window.removeEventListener('resize', this.listenerResize);
      this.cdr.detectChanges();
    }
  };
  IconPickerComponent.prototype.onResize = function () {
    if (this.position === 'fixed') {
      this.setDialogPosition();
    }
  };
  IconPickerComponent.prototype.setDialogPosition = function () {
    var dialogHeight = this.dialogElement.nativeElement.offsetHeight;
    var node = this.directiveElementRef.nativeElement, position = 'static', transform = '';
    var parentNode = null, transformNode = null, style = null;
    while (node !== null && node.tagName !== 'HTML') {
      style = window.getComputedStyle(node);
      position = style.getPropertyValue('position');
      transform = style.getPropertyValue('transform');
      if (position !== 'static' && parentNode === null) {
        parentNode = node;
      }
      if (transform && transform !== 'none' && transformNode === null) {
        transformNode = node;
      }
      if (position === 'fixed') {
        parentNode = transformNode;
        break;
      }
      node = node.parentNode;
    }
    var boxDirective = this.createBox(this.directiveElementRef.nativeElement, (position !== 'fixed'));
    if ((position !== 'fixed' || parentNode) && !this.useRootViewContainer) {
      if (parentNode === null) {
        parentNode = node;
      }
      var boxParent = this.createBox(parentNode, true);
      this.top = boxDirective.top - boxParent.top;
      this.left = boxDirective.left - boxParent.left;
    }
    else {
      this.top = boxDirective.top;
      this.left = boxDirective.left;
    }
    if (position === 'fixed') {
      this.position = 'fixed';
    }
    if (this.cpPosition === 'left') {
      this.top += boxDirective.height * this.cpPositionOffset / 100 - this.dialogArrowOffset;
      this.left -= this.cpWidth + this.dialogArrowSize - 2;
    }
    else if (this.cpPosition === 'top') {
      this.top -= dialogHeight + this.dialogArrowSize;
      this.left += this.cpPositionOffset / 100 * boxDirective.width - this.dialogArrowOffset;
      this.arrowTop = dialogHeight - 1;
    }
    else if (this.cpPosition === 'bottom') {
      this.top += boxDirective.height + this.dialogArrowSize;
      this.left += this.cpPositionOffset / 100 * boxDirective.width - this.dialogArrowOffset;
    }
    else {
      this.top += boxDirective.height * this.cpPositionOffset / 100 - this.dialogArrowOffset;
      this.left += boxDirective.width + this.dialogArrowSize - 2;
    }
  };
  IconPickerComponent.prototype.update = function (emit) {
    // if (this.sliderDimMax) {
    // let hsla = this.service.hsva2hsla(this.hsva);
    // let rgba = this.service.denormalizeRGBA(this.service.hsvaToRgba(this.hsva));
    // let hueRgba = this.service.denormalizeRGBA(this.service.hsvaToRgba(new Hsva(this.hsva.h, 1, 1, 1)));
    if (emit === void 0) {
      emit = true;
    }
    // this.hslaText = new Hsla(Math.round((hsla.h) * 360), Math.round(hsla.s * 100), Math.round(hsla.l * 100), Math.round(hsla.a * 100) / 100);
    // this.rgbaText = new Rgba(rgba.r, rgba.g, rgba.b, Math.round(rgba.a * 100) / 100);
    // this.hexText = this.service.hexText(rgba, this.cpAlphaChannel === 'hex8');
    // this.alphaSliderColor = 'rgb(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ')';
    // this.hueSliderColor = 'rgb(' + hueRgba.r + ',' + hueRgba.g + ',' + hueRgba.b + ')';
    // if (this.format === 0 && this.hsva.a < 1 && this.cpAlphaChannel === 'hex6') {
    //     this.format++;
    // }
    // let lastOutput = this.outputColor;
    // this.outputColor = this.service.outputFormat(this.hsva, this.cpOutputFormat, this.cpAlphaChannel === 'hex8');
    // this.selectedColor = this.service.outputFormat(this.hsva, 'rgba', false);
    // this.slider = new SliderPosition((this.hsva.h) * this.sliderDimMax.h - 8, this.hsva.s * this.sliderDimMax.s - 8,
    //     (1 - this.hsva.v) * this.sliderDimMax.v - 8, this.hsva.a * this.sliderDimMax.a - 8)
    // if (emit && lastOutput !== this.outputColor) {
    //     this.directiveInstance.colorChanged(this.outputColor);
    // }
    // }
  };
  IconPickerComponent.prototype.isDescendant = function (parent, child) {
    var node = child.parentNode;
    while (node !== null) {
      if (node === parent) {
        return true;
      }
      node = node.parentNode;
    }
    return false;
  };
  IconPickerComponent.prototype.createBox = function (element, offset) {
    return {
      top: element.getBoundingClientRect().top + (offset ? window.pageYOffset : 0),
      left: element.getBoundingClientRect().left + (offset ? window.pageXOffset : 0),
      width: element.offsetWidth,
      height: element.offsetHeight
    };
  };
  return IconPickerComponent;
}());
__decorate([
  core_1.ViewChild('hueSlider')
], IconPickerComponent.prototype, "hueSlider");
__decorate([
  core_1.ViewChild('alphaSlider')
], IconPickerComponent.prototype, "alphaSlider");
__decorate([
  core_1.ViewChild('dialogPopup')
], IconPickerComponent.prototype, "dialogElement");
IconPickerComponent = __decorate([
  core_1.Component({
    selector: 'icon-picker',
    templateUrl: './icon-picker.component.html',
    styleUrls: ['./icon-picker.component.css']
  })
], IconPickerComponent);
exports.IconPickerComponent = IconPickerComponent;
