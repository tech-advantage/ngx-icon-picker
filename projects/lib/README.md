# Angular Icon Picker

[![Build Status](https://travis-ci.org/tech-advantage/ngx-icon-picker.svg?branch=master)](https://travis-ci.org/tech-advantage/ngx-icon-picker)
[![NPM Version](https://badge.fury.io/js/ngx-icon-picker.svg)](https://npmjs.org/package/ngx-icon-picker)

* Largely inspired by [ngx-color-picker](https://github.com/zefoy/ngx-color-picker)

![demo_02](https://github.com/tech-advantage/ngx-icon-picker/blob/master/doc/demo_02.jpg)

Angular IconPicker Directive/Component with no dependencies required.

This is an Icon Picker Directive/Component for Angular 9+.

The icon Picker manages Font Awesome, Bootstrap Glyphicon and Font Awesome5.

## Installing and usage

   npm install ngx-icon-picker --save

### Load the module for your app

```typescript
import { IconPickerModule } from 'ngx-icon-picker'; 
import {NgModule} from '@angular/core';

@NgModule({
  ...
  imports: [
    ...
    IconPickerModule
  ]
})
```

### Use it in your HTML template

```html
<input [iconPicker]="icon" (iconPickerSelect)="onIconPickerSelect(newIcon)"/>
```

Available inputs and output :

```typescript
[iconPicker]                // The icon to select in the grid.

[ipWidth]                   // Use this option to set icon picker dialog width (default: '230px').
[ipHeight]                  // Use this option to force icon picker dialog height (default: 'auto').
[ipMaxHeight]               // Use this option to force icon picker dialog max-height (default: '200px').

[ipIconPack]                // Icon pack (Font Awesome / Bootstrap Glyphicon / Font AWesome5): 'fa', 'bs', 'fa5', 'all' (default: ['bs', 'fa5']).
[ipIconSize]                // Icon size in the selector (default: '16px')
[ipIconPadding]             // Button padding for the icon (default: '6px') 

[ipKeepSearchFilter]        // The search filter keep the value to filter  (default: 'false')    

[ipFallbackIcon]            // Is used when the icon is undefined (default: 'fas fa-user').
[ipPosition]                // Dialog position: 'right', 'left', 'top', 'bottom' (default: 'right').
[ipPlaceHolder]             // Search input placeholder (default: 'Search icon...').

(iconPickerSelect)          // On selected icon value.

```

### Installing from a brand new @angular/cli project

Version of @angular/cli used is V7.3.3.

* Generate a new project (here we use LESS preprocessor): `ng new myproject --style less`
* `cd myproject`
* Update *package.json* with:

```json
      "bootstrap": "3.3.7",
      "font-awesome": "4.7.0",
```

  or with npm command:

```bash
  npm install --save bootstrap@3.3.7
  npm install --save font-awesome@4.7.0
```

* Install dependancies: `yarn install` (or `npm install`).
* Update *styles.less* with:

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

* Update the template `app.component.html`:

```html
<div class="container">
  <div [formGroup]="myFormGroup">
    <label>Icon</label>
    <div class="input-group">
        <span class="input-group-addon"><i [ngClass]="iconCss.value"></i></span>
        <input type="text" name="iconCss" class="form-control"
               formControlName="iconCss"
               [iconPicker]="iconCss.value"
               [ipPosition]="'bottom'"
               [ipWidth]="'250px'"
               [ipIconSize]="'16px'"
               [ipIconPadding]="'6px'"
               [ipPlaceHolder]="'Choose an icon'"
               [ipFallbackIcon]="fallbackIcon"
               (iconPickerSelect)="onIconPickerSelect($event)"/>
      </div>
  </div>
</div>
```

**Note**: A class for the icon button can be define to override the CSS: `ip-button-icon`

* Update the component `app.component.ts`:

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
  fallbackIcon = 'fas fa-user';

  ngOnInit(): void {
    this.myFormGroup = new FormGroup({iconCss: this.iconCss});
  }

  onIconPickerSelect(icon: string): void {
    this.iconCss.setValue(icon);
  }
}
```

* Start your project with `yarn start` (or `npm start`) and go to _localhost:4200_

[demo_01](https://github.com/tech-advantage/ngx-icon-picker/blob/master/doc/demo_01.jpg)

* You should now be able to change icon by clicking input field :

![demo_02](https://github.com/tech-advantage/ngx-icon-picker/blob/master/doc/demo_02.jpg)

![demo_03](https://github.com/tech-advantage/ngx-icon-picker/blob/master/doc/demo_03.jpg)

![demo_04](https://github.com/tech-advantage/ngx-icon-picker/blob/master/doc/demo_04.jpg)

## Example

To run the example or to validate your development with the example, you have to build the library:

```bash
npm install
npm run build
```
Then start the server:

```bash
npm start
```

go to _localhost:4200_

Source are availble in **projects/app**

## Build the library for production

```bash
npm install
npm run prepare
npm run publish
```

Source are available in **projects/lib**

## Contributors

NoelToy: <https://github.com/NoelToy/>

Shahmir Noorani: <https://github.com/shahmirn/>
