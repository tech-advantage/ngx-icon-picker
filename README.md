# Angular Icon Picker

<a href="https://badge.fury.io/js/ngx-icon-picker"><img src="https://badge.fury.io/js/ngx-icon-picker.svg" align="right" alt="npm version" height="18"></a>

* ==> **Do not use: still in work in progress :)**
* Largely inspired by [ngx-color-picker](https://github.com/zefoy/ngx-color-picker)

Angular IconPicker Directive/Component with no dependencies required.

This is an Icon Picker Directive/Component for Angular 2+.

### Installing and usage

    npm install ngx-icon-picker --save
    
Or with yarn : 

    yarn add ngx-icon-picker
    
##### Load the module for your app:

```typescript
import { IconPickerModule } from 'ngx-icon-picker';

@NgModule({
  ...
  imports: [
    ...
    IconPickerModule
  ]
})
```

##### Use it in your HTML template:

```html
<input [iconPicker]="icon" (iconPickerSelect)="onIconPickerSelect(newIcon)"/>
```

Available inputs and output :

```typescript
[iconPicker]                // The icon to select in the grid.

[ipWidth]                    // Use this option to set icon picker dialog width (default: '230px').
[ipHeight]                   // Use this option to force icon picker dialog height (default: 'auto').
[ipMaxHeight]                // Use this option to force icon picker dialog max-height (default: '200px').

[ipIconPack]                 // Icon pack (Font Awesome / Bootstrap Glyphicon): 'fa', 'bs', 'all' (default: 'all').
[ipFallbackIcon]             // Is used when the icon is undefined (default: 'fa fa-user-plus').
[ipPosition]                 // Dialog position: 'right', 'left', 'top', 'bottom' (default: 'right').
[ipPlaceHolder]              // Search input placeholder (default: 'Search icon...').

(iconPickerSelect)           // On selected icon value.

```
