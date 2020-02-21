import { Component, ElementRef, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';

import { IconPickerService } from './icon-picker.service';
import { Icon, IconType } from './icon';

@Component({
  // tslint:disable-next-line: component-selector
  selector   : 'icon-picker',
  templateUrl: './icon-picker.component.html',
  styleUrls  : ['./icon-picker.component.scss']
})

export class IconPickerComponent implements OnInit {
  public ipPosition: string;
  public ipHeight: number;
  public ipMaxHeight: number;
  public ipWidth: number;
  public ipPlaceHolder: string;
  public ipFallbackIcon: string;
  public ipIconPack: string[];

  public show: boolean;
  public hidden: boolean;
  public top: number;
  public left: number;
  public position: string;
  public arrowTop: number;
  public selectedIcon: Icon;
  public iconType = IconType;

  private directiveInstance: any;
  private initialIcon: string;
  private directiveElementRef: ElementRef;

  private listenerMouseDown: any;
  private listenerResize: any;

  private dialogArrowSize = 10;

  @ViewChild('dialogPopup') dialogElement: any;

  icons: Icon[] = [];
  search = '';

  constructor(
    private el: ElementRef,
    private cdr: ChangeDetectorRef,
    private service: IconPickerService) {
  }

  setDialog(instance: any, elementRef: ElementRef, icon: string, ipPosition: string, ipHeight: string, ipMaxHeight: string,
            ipWidth: string, ipPlaceHolder: string, ipFallbackIcon: string, ipIconPack: string[]) {
    this.directiveInstance = instance;
    this.setInitialIcon(icon);
    this.directiveElementRef = elementRef;
    this.ipPosition = ipPosition;
    this.ipHeight = parseInt(ipHeight, 10);
    this.ipMaxHeight = parseInt(ipMaxHeight, 10);
    this.ipWidth = parseInt(ipWidth, 10);
    if (!this.ipWidth) {
      this.ipWidth = elementRef.nativeElement.offsetWidth;
    }
    this.ipPlaceHolder = ipPlaceHolder;
    this.ipFallbackIcon = ipFallbackIcon;
    this.ipIconPack = ipIconPack;
  }

  ngOnInit() {
    this.icons = this.service.getIcons(this.ipIconPack);
    this.listenerMouseDown = (event: any) => this.onMouseDown(event);
    this.listenerResize = () => this.onResize();
    this.openDialog(this.initialIcon);
  }

  setInitialIcon(icon: string) {
    this.initialIcon = icon;
    this.selectedIcon = this.icons.find(el => el ?
        `fa fa-${el.id}` === icon || `glyphicon glyphicon-${el.id}` === icon || `${el.id}` === icon :
        false
    );
    if (this.selectedIcon && icon !== this.ipFallbackIcon) {
      this.search = this.selectedIcon.id;
    } else {
      this.search = '';
    }
  }

  openDialog(icon: string) {
    this.setInitialIcon(icon);
    this.openIconPicker();
  }

  setSearch(val: string) {
    this.search = val;
  }

  selectIcon(icon: Icon): void {
    if (icon.type === IconType.FONT_AWESEOME) {
      this.directiveInstance.iconSelected(`fa fa-${icon.id}`);
    } else if (icon.type === IconType.BOOTSTRAP) {
      this.directiveInstance.iconSelected(`glyphicon glyphicon-${icon.id}`);
    } else if (icon.type === IconType.FONT_AWESEOME5) {
      this.directiveInstance.iconSelected(`${icon.id}`);
    }
    this.closeIconPicker();
  }

  onMouseDown(event: any) {
    if (!this.isDescendant(this.el.nativeElement, event.target) && event.target !== this.directiveElementRef.nativeElement) {
      this.closeIconPicker();
    }
  }

  openIconPicker() {
    if (!this.show) {
      this.show = true;
      this.hidden = true;
      setTimeout(() => {
        this.setDialogPosition();
        this.hidden = false;
        this.cdr.detectChanges();
      }, 0);
      document.addEventListener('mousedown', this.listenerMouseDown);
      window.addEventListener('resize', this.listenerResize);
    }
  }

  closeIconPicker() {
    if (this.show) {
      this.show = false;
      document.removeEventListener('mousedown', this.listenerMouseDown);
      window.removeEventListener('resize', this.listenerResize);
      this.cdr.detectChanges();
    }
  }

  onResize() {
    if (this.position === 'fixed') {
      this.setDialogPosition();
    }
  }

  setDialogPosition() {
    const dialogHeight = this.dialogElement.nativeElement.offsetHeight;
    let node = this.directiveElementRef.nativeElement;
    let position = 'static';
    let transform = '';
    let parentNode: any = null;
    let transformNode: any = null;
    let style: any = null;
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
    const boxDirective = this.createBox(this.directiveElementRef.nativeElement, (position !== 'fixed'));
    if (position !== 'fixed' || parentNode) {
      if (parentNode === null) {
        parentNode = node;
      }
      const boxParent = this.createBox(parentNode, true);
      this.top = boxDirective.top - boxParent.top;
      this.left = boxDirective.left - boxParent.left;
    } else {
      this.top = boxDirective.top;
      this.left = boxDirective.left;
    }
    if (position === 'fixed') {
      this.position = 'fixed';
    }
    if (this.ipPosition === 'left') {
      this.left -= this.ipWidth + this.dialogArrowSize - 2;
    } else if (this.ipPosition === 'top') {
      this.top -= dialogHeight + this.dialogArrowSize;
      this.arrowTop = dialogHeight - 1;
    } else if (this.ipPosition === 'bottom') {
      this.top += boxDirective.height + this.dialogArrowSize;
    } else {
      this.left += boxDirective.width + this.dialogArrowSize - 2;
    }
  }

  isDescendant(parent: any, child: any): boolean {
    let node: any = child.parentNode;
    while (node !== null) {
      if (node === parent) {
        return true;
      }
      node = node.parentNode;
    }
    return false;
  }

  createBox(element: any, offset: boolean): any {
    return {
      top   : element.getBoundingClientRect().top + (offset ? window.pageYOffset : 0),
      left  : element.getBoundingClientRect().left + (offset ? window.pageXOffset : 0),
      width : element.offsetWidth,
      height: element.offsetHeight
    };
  }
}
