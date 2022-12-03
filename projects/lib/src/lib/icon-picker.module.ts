import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { IconPickerService } from './icon-picker.service';
import { IconPickerComponent } from './icon-picker.component';
import { IconPickerDirective } from './icon-picker.directive';
import { TextDirective } from './text.directive';
import { SearchIconPipe } from './search-icon.pipe';

@NgModule({
    imports: [
        CommonModule,
        FontAwesomeModule,
    ],
    providers: [
        IconPickerService
    ],
    declarations: [
        IconPickerComponent,
        IconPickerDirective,
        TextDirective,
        SearchIconPipe
    ],
    exports: [
        IconPickerDirective
    ]
})
export class IconPickerModule {
}
