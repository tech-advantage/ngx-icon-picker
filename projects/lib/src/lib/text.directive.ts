import { Directive, EventEmitter, Input, Output } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[text]',
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host    : {
    '(input)': 'changeInput($event.target.value)'
  }
})
export class TextDirective {
  @Output() newValue = new EventEmitter<any>();
  @Input() text: any;

  changeInput(value: string) {
    this.newValue.emit(value);
  }
}
