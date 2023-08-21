import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { IconPickerService } from './icon-picker.service';
import { Icon, IconType } from './icon';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'icon-picker',
  templateUrl: './icon-picker.component.html',
  styleUrls: ['./icon-picker.component.scss']
})

export class IconPickerComponent implements OnInit {
  @ViewChild('dialogPopup') dialogElement: any;

  // Popover
  public ipPosition: string;
  public ipHeight: number;
  public ipMaxHeight: number;
  public ipWidth: number;
  // Icon css
  public ipIconSize: number;
  public ipIconVerticalPadding: number;
  public ipIconHorizontalPadding: number;
  // Item Style ie input and button
  public ipButtonStyleClass: string;
  public ipInputSearchStyleClass: string;
  public ipDivSearchStyleClass: string;
  public ipUseRootViewContainer: boolean = false;
  // Icon and behaviors
  public ipKeepSearchFilter: boolean;
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
  public buttonWidth: number;
  public buttonHeight: number;

  icons: Icon[] = [];
  search = '';

  private directiveInstance: any;
  private initialIcon: string;
  private directiveElementRef: ElementRef;

  private listenerMouseDown: any;
  private listenerResize: any;

  private dialogArrowSize = 10;

  constructor(
    private el: ElementRef,
    private cdr: ChangeDetectorRef,
    private service: IconPickerService) {
  }

  setDialog(instance: any, elementRef: ElementRef, icon: string, ipPosition: string, ipHeight: string, ipMaxHeight: string,
            ipWidth: string, ipPlaceHolder: string, ipFallbackIcon: string, ipIconPack: string[], ipIconSize: string,
            ipIconVerticalPadding: string, ipIconHorizontalPadding: string, ipButtonStyleClass: string, ipDivSearchStyleClass: string,
            ipInputSearchStyleClass: string, ipKeepSearchFilter: string, ipUseRootViewContainer?: boolean) {
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
    this.ipIconSize = parseInt(ipIconSize, 10);
    this.ipIconVerticalPadding = parseInt(ipIconVerticalPadding, 10);
    this.ipIconHorizontalPadding = parseInt(ipIconHorizontalPadding, 10);
    this.ipKeepSearchFilter = JSON.parse(ipKeepSearchFilter);
    this.ipPlaceHolder = ipPlaceHolder;
    this.ipFallbackIcon = ipFallbackIcon;
    this.ipIconPack = ipIconPack;
    this.ipButtonStyleClass = ipButtonStyleClass;
    this.ipInputSearchStyleClass = ipInputSearchStyleClass;
    this.ipDivSearchStyleClass = ipDivSearchStyleClass;
    this.ipUseRootViewContainer = ipUseRootViewContainer;


    this.buttonHeight = this.ipIconSize + 2 * this.ipIconVerticalPadding;
    this.buttonWidth = this.ipIconSize + 2 * this.ipIconHorizontalPadding;
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
      `fa fa-${el.id}` === icon || `pi pi-${el.id}` === icon || `${el.id}` === icon :
      false
    );
    if (this.ipKeepSearchFilter && this.selectedIcon && icon !== this.ipFallbackIcon) {
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
    if (icon.type === IconType.FontAwesome) {
      this.directiveInstance.iconSelected(`fa fa-${icon.id}`);
    } else if (icon.type === IconType.FontAwesome5) {
      this.directiveInstance.iconSelected(`${icon.id}`);
    } else if (icon.type === IconType.FontAwesome6) {
      this.directiveInstance.iconSelected(`${icon.id}`);
    } else if (icon.type === IconType.Material) {
      this.directiveInstance.iconSelected(`${icon.id}`);
    } else if (icon.type === IconType.PrimeIcons) {
      this.directiveInstance.iconSelected(`pi pi-${icon.id}`);
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
      this.directiveInstance.stateChanged(true);
      document.addEventListener('mousedown', this.listenerMouseDown);
      window.addEventListener('resize', this.listenerResize);
    }
  }

  closeIconPicker() {
    if (this.show) {
      this.show = false;
      this.directiveInstance.stateChanged(false);
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
    if (this.ipUseRootViewContainer || (position === 'fixed' &&
      (!parentNode || parentNode instanceof HTMLUnknownElement))) {
      this.top = boxDirective.top;
      this.left = boxDirective.left;
    } else {
      if (parentNode === null) {
        parentNode = node;
      }

      const boxParent = this.createBox(parentNode, (position !== 'fixed'));

      this.top = boxDirective.top - boxParent.top;
      this.left = boxDirective.left - boxParent.left;
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
      top: element.getBoundingClientRect().top + (offset ? window.pageYOffset : 0),
      left: element.getBoundingClientRect().left + (offset ? window.pageXOffset : 0),
      width: element.offsetWidth,
      height: element.offsetHeight
    };
  }
}
