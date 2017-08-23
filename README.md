# Angular Icon Picker

<a href="https://badge.fury.io/js/ngx-icon-picker"><img src="https://badge.fury.io/js/ngx-icon-picker.svg" align="right" alt="npm version" height="18"></a>

* ==> **Library still in work in progress**
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

    
### Installing from a brand new @angular/cli project

Version of @angular/cli used is V1.2.0.

* Generate a new project (here we use LESS preprocessor) : `ng new myproject --style less`
* Update *package.json* with : 
  ```
      "bootstrap": "3.3.7",
      "font-awesome": "4.7.0",
      "ngx-icon-picker": "0.0.6",
  ```
* Install dependancies : `yarn install` (or `npm install`).
* Update *styles.less* with :
```less
@import '~bootstrap/less/bootstrap.less';
@import '~font-awesome/less/font-awesome.less';
```
* Import **IconPickerModule** in `app.module.ts` (also **CommonModule** and **ReactiveFormsModule**): 
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { IconPickerModule } from 'ngx-icon-picker/dist/index';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    IconPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
* Update the template `app.component.html` : 
```html
<div class="container">
  <div [formGroup]="myFormGroup">
    <label>Icon</label>
    <div class="input-group">
        <span class="input-group-addon"><i [ngClass]="iconCss.value"></i></span>
        <input type="text" name="iconCss" class="form-control"
               formControlName="iconCss"
               [iconPicker]="icon"
               [ipPosition]="'bottom'"
               [ipWidth]="'250px'"
               [ipPlaceHolder]="'Choose an icon'"
               [ipFallbackIcon]="fallbackIcon"
               (iconPickerSelect)="onIconPickerSelect($event)"/>
      </div>
  </div>
</div>
```

* Update the component `app.component.ts` : 
```typescript
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
```
* Start your project with `yarn start` (or `npm start`) and go to _localhost:4200_

![demo_01](https://github.com/tech-advantage/ngx-icon-picker/blob/master/doc/demo_01.jpg)

* You should now be able to change icon by clicking input field :

![demo_02](https://github.com/tech-advantage/ngx-icon-picker/blob/master/doc/demo_02.jpg)

![demo_03](https://github.com/tech-advantage/ngx-icon-picker/blob/master/doc/demo_03.jpg)

![demo_04](https://github.com/tech-advantage/ngx-icon-picker/blob/master/doc/demo_04.jpg)
